/* eslint-disable func-names */
/* eslint-disable no-restricted-globals */

function filterFalsyValue(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([, value]) => value));
}

function isValidMessageType(messageType) {
  const regex = /^[A-Z_]+$/;
  return regex.test(messageType);
}

function postMessageToClients(message) {
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage(message);
    });
  });
}

// Using IIFE to prevent malicious pollution on global variables
(function () {
  let serviceWorkerMessageType = '';
  let clientData = {};

  self.addEventListener('install', () => {
    console.log('install and activate');
    const url = new URL(self.location);
    serviceWorkerMessageType = url.searchParams.get('serviceWorkerMessageType');
    self.skipWaiting();
  });

  self.addEventListener('message', event => {
    if (
      isValidMessageType(serviceWorkerMessageType) &&
      event.data?.type === serviceWorkerMessageType
    ) {
      clientData = event.data.payload;
    }
  });

  self.addEventListener('push', event => {
    const {
      title,
      body,
      icon_url: icon,
      photo_url: photo,
      url,
      tid,
      // The tracking link uid, usage in data coming from other than i13n beacon
      luid,
      template_id: templateId,
      node_id: nodeId,
      cycle_id: cycleId,
    } = JSON.parse(event.data.text());
    const params = new URLSearchParams(
      filterFalsyValue({
        ...clientData,
        tid,
        luid,
        t: 'event',
        ec: 'WebPush',
        ea: 'WebPushDeliver',
        ev: templateId,
        el: JSON.stringify({
          template_id: `${templateId}`,
          node_id: `${nodeId}`,
          cycle_id: `${cycleId}`,
        }),
      })
    );
    const location = new URL(self.location);
    try {
      fetch(`http://localhost:8000/collect?${params}`);
    } catch (error) {
      console.error('Error on sending impression event from web push:', error);
      postMessageToClients({ type: 'omnitag-error', payload: { error } });
    }

    console.log('showNotification in promise', title);
    event.waitUntil(
      self.registration.showNotification(title, {
        body,
        icon,
        image: photo,
        data: { url },
      }); 
    );
    // console.log('showNotification', title);
    // self.registration.showNotification(title, {
    //   body,
    //   icon,
    //   image: photo,
    //   data: { url },
    // });
  });

  self.addEventListener('error', event => {
    postMessageToClients({
      type: 'omnitag-error',
      payload: { error: event.error },
    });
  });
})();

self.addEventListener('notificationclick', event => {
  // eslint-disable-next-line no-undef
  clients.openWindow(event.notification.data.url);
  event.notification.close();
});

// Export for testing purposes in Node environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = isValidMessageType;
}
