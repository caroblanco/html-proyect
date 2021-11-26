
              AOS.init({
                  duration: 1500
              });

              let progress = document.getElementById('progressbar');
              window.onscroll = function () {
                  let totalHeight = document.body.scrollHeight + window.innerHeight;
                  let progressHeight = (window.pageYOffset / totalHeight) * 28.1;
                  progress.style.display = 'revert';
                  progress.style.height = progressHeight + "%";
                  let flowBar1 = document.getElementById('CBar');
                  let flowBar2 = document.getElementById('SQLBar');
                  let flowBar3 = document.getElementById('GHBar');
                  let flowBar4 = document.getElementById('HTMLBar');

                  if (progressHeight > 5) {
      
                      flowBar1.style.animationName = 'animateskillbar11';
                      flowBar2.style.animationName = 'animateskillbar22';
                      flowBar3.style.animationName = 'animateskillbar33';
                      flowBar4.style.animationName = 'animateskillbar44';
                      flowBar5.style.animationName = 'animateskillbar55';
                      flowBar6.style.animationName = 'animateskillbar66';
                  }
                  else {
                      flowBar1.style.animationName = 'animateskillbar1';
                      flowBar2.style.animationName = 'animateskillbar2';
                      flowBar3.style.animationName = 'animateskillbar3';
                      flowBar4.style.animationName = 'animateskillbar4';
                      flowBar5.style.animationName = 'animateskillbar5';
                      flowBar6.style.animationName = 'animateskillbar6';
                  }
      
              }