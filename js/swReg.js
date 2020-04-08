if('serviceWorker' in navigator){
    navigator.serviceWorker.register('https://msyagami.github.io/faire-web-app/sw.js')
      .then(reg => console.log('service worker working'))
      .catch(err => console.log('service worker failed:', err));
  }