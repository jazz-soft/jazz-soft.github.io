onmessage = function(ev) {
 postMessage('Hello from the Worker!');
 close();
};
