(function () {

  'use strict';

  // Config audio source.
    var url_audio = 'https://slack.sochadev.com/plugin_assets/audio';

  // Global vars.
    var container = document.getElementById('msgs_div');
    var container_count = 0;

  // Helper object for the observer.
    var helper = {
      hasClass: function(e, cls) {
        return (' ' + e.className + ' ').indexOf(' ' + cls + ' ') > -1;
      },
      checkAudio: function(e) {
        var c = e.innerHTML.trim();
        var b1 = c.indexOf(':play ');
        if (b1 >= 0) {
          b1++;

          var sound = c.substring(b1, c.indexOf(':', b1)).trim();
          sound = sound.substr(sound.indexOf(' ') + 1);

          var audio = document.getElementById('browser-plugin-audio-player');
          audio.src = url_audio + '/' + sound + '.mp3';
        }
      }
    };

  // Observer for the message container div.
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    var observer = new MutationObserver(function() {
      if (container) {
        var msg = container.getElementsByClassName('message');
        var msg_count = msg.length;

        // Initial load of container.
        if (container_count === 0) {
          container_count = msg_count;
        }
        // Now we can diff current message count with global container count and
        // determine if there's a new message.
        if (msg_count > container_count) {
          var e = msg[msg.length - 1];

          // The observer will catch unread hidden copies of the same message;
          // check that here and make sure we're only acting on the real thing.
          if (!helper.hasClass(e, 'unread')) {
            helper.checkAudio(e);
          }
        }

      }
    });

  // Start observing the messages container.
    if (container) {
      observer.observe(container, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false
      });
    }

})();
