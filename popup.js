'use strict';

const popupForm = document.getElementById('popupForm');

chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action === 'getSource') {
    const source = new DOMParser().parseFromString(request.source, 'text/html');

    const activityCount = source.querySelector('.activity-count');
    const activityCountMatches = activityCount.innerHTML.match(/(\d+)(.*)/);
    const popupTitle = document.createElement('h1');
    const activities = parseInt(activityCountMatches[1]);
    const activityTitle = activities + ' ' + (activities === 1 ? 'activity' : 'activities');

    popupTitle.innerHTML = activityTitle + ' to edit';
    popupForm.appendChild(popupTitle);

    const visibility = source.getElementById('visibility');
    if (visibility) {
      const popupVisibilityParagraph = document.createElement('p');
      const popupVisibilityLabel = document.createElement('label');

      popupVisibilityLabel.innerHTML = 'Privacy Controls';
      popupVisibilityParagraph.appendChild(popupVisibilityLabel);

      visibility.setAttribute('id', 'popupVisibility');
      popupVisibilityParagraph.appendChild(visibility);

      popupForm.appendChild(popupVisibilityParagraph);
    }

    if (activities > 0) {
      const popupButtonParagraph = document.createElement('p');
      const popupButtonLabel = document.createElement('label');

      popupButtonParagraph.appendChild(popupButtonLabel);

      const popupButton = document.createElement('button');
      popupButton.setAttribute('type', 'button');
      popupButton.setAttribute('id', 'popupButton');
      popupButton.innerHTML = 'Save all';

      popupButtonParagraph.appendChild(popupButton);

      popupForm.appendChild(popupButtonParagraph);

      popupButton.onclick = function(element) {
        const fields = {};

        if (visibility.value) {
          fields.visibility = visibility.value;
        }

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.executeScript(tabs[0].id, {
            code: 'updateActivities(' + JSON.stringify(fields) + ');'
            }, function () {
              window.close();
            }
          );
        });
      };
    }
  }
});

function onWindowLoad() {
  chrome.tabs.executeScript(null, {
    file: 'getPageSource.js',
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      popupForm.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });
}

window.onload = onWindowLoad;
