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
    try {
      fetch(`http://localhost:8000/collect?${params}`);
    } catch (error) {
      console.error('Error on sending impression event from web push:', error);
      postMessageToClients({ type: 'omnitag-error', payload: { error } });
    }

    console.log('showNotification', title);
    self.registration.showNotification(title, {
      body,
      icon,
      image: photo,
      data: { url },
    });

    // console.log('showNotification in promise', title);
    // event.waitUntil(
    //   self.registration.showNotification(title, {
    //     body,
    //     icon,
    //     image: photo,
    //     data: { url },
    //   })
    // );

    // console.log('delay showNotification and check if focused', title);
    // new Promise(resolve => setTimeout(resolve, 4000)) // Delay for 4 seconds
    //   .then(() =>
    //     self.clients.matchAll().then(clientList => {
    //       // Check if there's at least one focused client.
    //       const focused = clientList.some(client => client.focused);
    //       let additionalBody = '';

    //       if (focused) {
    //         additionalBody = 'The page is focused.';
    //       } else if (clientList.length > 0) {
    //         additionalBody =
    //           "You haven't closed the page, click here to focus it.";
    //       } else {
    //         additionalBody = 'The page is not focused.';
    //       }

    //       console.log(additionalBody);

    //       // Show a notification with body depending on the state of the clients
    //       return self.registration.showNotification(title, {
    //         body: `${body} (${additionalBody})`,
    //         icon,
    //         image: photo,
    //         data: { url },
    //       });
    //     })
    //   );
  });
})();

self.addEventListener('notificationclick', event => {
  // eslint-disable-next-line no-undef
  event.waitUntil(
    // Retrieve a list of the clients of this service worker.
    self.clients.matchAll().then(clientList => {
      // If there is at least one client, focus it.
      if (clientList.length > 0) {
        return clientList[0].focus();
      }

      // Otherwise, open a new page.
      self.clients.openWindow(event.notification.data.url);
      return event.notification.close();
    })
  );
});

// Export for testing purposes in Node environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = isValidMessageType;
}
