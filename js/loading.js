//<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" type="text/css">
//<link rel="stylesheet" href="./css/loading.css" type="text/css">


// Function > Loader Screen Script
(function LoaderScreenScript(window = window, document = window.document, undefined = window.undefined || void 0) {
  // Initialization > (Processing Time, Condition, Timeout, Loader (...))
  let processingTime = 0,
      condition = function() {
          // Return
          return document.body
      },
      timeout = function() {
          // Return
          return (processingTime * 1e3) / 2
      },
      loaderScreenFontSize = typeof window.loaderScreenFontSize != 'undefined' ? window.loaderScreenFontSize : 14,
      loaderScreenMargin = typeof window.loaderScreenMargin != 'undefined' ? window.loaderScreenMargin : 10,
      loaderScreenMessage = typeof window.loaderScreenMessage != 'undefined' ? window.loaderScreenMessage : 'Loading, please wait&hellip;',
      loaderScreenOpacity = typeof window.loaderScreenOpacity != 'undefined' ? window.loaderScreenOpacity : .75,
      loaderScreenTransition = typeof window.loaderScreenTransition != 'undefined' ? window.loaderScreenTransition : .675,
      loaderScreenWidth = typeof window.loaderScreenWidth != 'undefined' ? window.loaderScreenWidth : 7.5;

  // Function > Update
  function update() {
      // Set Timeout
      setTimeout(function() {
          // Initialization > (Data, Metadata)
          var data = document.createElement('loader-screen-element'),
              metadata = setInterval(function() {
                  /* Logic
                          [if:else if:else statement]
                  */
                  if (document.readyState == 'complete') {
                      // Alpha
                      alpha();

                      // Test
                      test()
                  }
              });

          // Insertion
          document.body.appendChild(data);

          // Style > <body> > Overflow
          document.body.style = ('overflow: hidden !important; pointer-events: none !important; user-drag: none !important; user-select: none !important;' + (document.body.getAttribute('style') || ' ')).trim();

          // Modification > Data

              data.innerHTML =
                  '<div class="loader-container">'+
                    '<div class="loader">'+
                      '<span class="refreshing-loader">Loading&#8230;</span>'+
                      '<span class="glass_hour"></span>'+
                  '</div></div>'

              // Style
              data.style = 'background-color: rgba(255, 255, 255, .98); display: flex; height: auto;  px; justify-content: center; max-height: 100% !important; max-width: 100% !important; min-height: 100vh; min-width: 100vh; position: absolute; top: 0; transition: ' + loaderScreenTransition + 's ease-in-out; width: ' + innerWidth + 'px; z-index: 2147483647';

          // Function
              // Alpha
              function alpha() {
                  // Clear Interval
                  clearInterval(metadata)
              };

              // Test
              function test() {
                  // Style > Data
                      // Background Color
                      data.style.backgroundColor = 'transparent';

                      // Opacity
                      data.style.opacity = 0;

                  // Set Timeout
                  setTimeout(function() {
                      // Deletion
                      data.remove();

                      // Modification > <body> > Style
                      document.body.style = document.body.getAttribute('style').replace('overflow: hidden !important;', '').replace('pointer-events: none !important;', '').replace('user-drag: none !important;', '').replace('user-select: none !important;', '');
                      (document.body.getAttribute('style') || '').trim() || document.body.removeAttribute('style')
                  }, ((+getComputedStyle(data).getPropertyValue('animation-delay').replace(/[a-zA-Z]/g, '').trim() + +getComputedStyle(data).getPropertyValue('animation-duration').replace(/[a-zA-Z]/g, '').trim() + +getComputedStyle(data).getPropertyValue('transition-delay').replace(/[a-zA-Z]/g, '').trim() + +getComputedStyle(data).getPropertyValue('transition-duration').replace(/[a-zA-Z]/g, '').trim()) * 1e3) + 100);
              }
      }, timeout())
  };

  /* Logic
          [if:else if:else statement]
  */
  if (condition())
      // Update
      update();

  else {
      // Initialization > Data
      var data = setInterval(function() {
          /* Logic
                  [if:else if:else statement]
          */
          if (condition()) {
              // Update > Processing Time
              processingTime += 1;

              // Update
              update();

              // Metadata
              metadata()
          }
      });

      // Function > Metadata
      function metadata() {
          // Clear Interval
          clearInterval(data);

          /* Logic
                  [if:else if:else statement]

              > Deletion
          */
          if ('data' in window && typeof data == 'undefined')
              delete window.data
      }
  }
})(window, window.document, window.undefined || void 0)