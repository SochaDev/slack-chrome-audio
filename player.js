(function () {

  'use strict';

  if (window.top === window) {
    // Inject the observer script.
    var inspectorScript = document.createElement('script');
    inspectorScript.type = 'text/javascript';
    inspectorScript.src = chrome.extension.getURL('/observer.js');
    document.head.appendChild(inspectorScript);

    // Add our audio element to the DOM. The observer will set its src as needed.
    var identifier = 'browser-plugin-audio-player';
    var audio = document.createElement('audio');
    audio.id = identifier;
    audio.controls = false;
    audio.autoplay = 'autoplay';
    audio.type = 'audio/mp3';
    document.body.appendChild(audio);
  }

})();
