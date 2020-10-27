'use strict';

const filterPanel = document.querySelector('.search .panel');

const filterPanelHeading = document.createElement('div');
filterPanelHeading.classList.add('panel-heading');
filterPanel.insertAdjacentElement('afterbegin', filterPanelHeading);

const filterPanelTitle = document.createElement('div');
filterPanelTitle.classList.add('panel-title');
filterPanelTitle.innerText = 'Filter activities';
filterPanelHeading.appendChild(filterPanelTitle);

const editPanel = document.createElement('div');
editPanel.classList.add('panel', 'panel-default');
filterPanel.insertAdjacentElement('afterend', editPanel);

const editPanelHeading = document.createElement('div');
editPanelHeading.classList.add('panel-heading');
editPanel.appendChild(editPanelHeading);

const editPanelTitle = document.createElement('div');
editPanelTitle.classList.add('panel-title');
editPanelTitle.innerText = 'Update activities';
editPanelHeading.appendChild(editPanelTitle);

const editPanelBody = document.createElement('div');
editPanelBody.classList.add('panel-body', 'row');
editPanel.appendChild(editPanelBody);

const editPanelInfoRow = document.createElement('div');
editPanelInfoRow.classList.add('form-group', 'col-sm-12');
editPanelBody.appendChild(editPanelInfoRow);

const editPanelInfo = document.createElement('div');
editPanelInfo.classList.add('alert', 'alert-info');
editPanelInfo.innerText = 'Not all filtered activities have the fields available in the update panel. The ' +
  'plugin will just update the fields that are available for each individual activity.';
editPanelInfoRow.appendChild(editPanelInfo);

const workoutTypeRideOptions = document.getElementById('workout_type_ride');
const editPanelFormGroupRideType = document.createElement('div');
editPanelFormGroupRideType.classList.add('form-group', 'col-sm-6');
editPanelBody.appendChild(editPanelFormGroupRideType);

const editPanelRideTypeLabel = document.createElement('label');
editPanelRideTypeLabel.innerText = 'Ride type';
editPanelFormGroupRideType.appendChild(editPanelRideTypeLabel);

const editPanelRideTypeField = document.createElement('select');
editPanelRideTypeField.id = 'strava-bulk-edit-ride-type';
editPanelRideTypeField.classList.add('form-control');
editPanelRideTypeField.innerHTML =  workoutTypeRideOptions.innerHTML.replace(/<option value="">All Ride Types/m, "<option value=\"10\">Ride");
editPanelFormGroupRideType.appendChild(editPanelRideTypeField);

const editPanelRideTypeDontChange = document.createElement('option');
editPanelRideTypeDontChange.innerText = 'Don\'t change the ride type';
editPanelRideTypeDontChange.value = '';
editPanelRideTypeDontChange.selected = true;
editPanelRideTypeField.insertAdjacentElement('afterbegin', editPanelRideTypeDontChange);

const BikeOptions = document.getElementById('gear_bike');
const editPanelFormGroupBike = document.createElement('div');
editPanelFormGroupBike.classList.add('form-group', 'col-sm-6');
editPanelBody.appendChild(editPanelFormGroupBike);

const editPanelBikeLabel = document.createElement('label');
editPanelBikeLabel.innerText = 'Bike';
editPanelFormGroupBike.appendChild(editPanelBikeLabel);

const editPanelBikeField = document.createElement('select');
editPanelBikeField.id = 'strava-bulk-edit-ride-type';
editPanelBikeField.classList.add('form-control');
editPanelBikeField.innerHTML =  BikeOptions.innerHTML.replace(/All Bikes/m, "Don't change the bike");
editPanelFormGroupBike.appendChild(editPanelBikeField);

// The Run type field is commented out, because updating this field does not
// work and the issue seams to be at Strava.

// const workoutTypeRunOptions = document.getElementById('workout_type_run');
// const editPanelFormGroupRunType = document.createElement('div');
// editPanelFormGroupRunType.classList.add('form-group', 'col-sm-6');
// editPanelBody.appendChild(editPanelFormGroupRunType);
//
// const editPanelRunTypeLabel = document.createElement('label');
// editPanelRunTypeLabel.innerText = 'Run type';
// editPanelFormGroupRunType.appendChild(editPanelRunTypeLabel);
//
// const editPanelRunTypeField = document.createElement('select');
// editPanelRunTypeField.id = 'strava-bulk-edit-ride-type';
// editPanelRunTypeField.classList.add('form-control');
// editPanelRunTypeField.innerHTML =  workoutTypeRunOptions.innerHTML.replace(/<option value="">All Run Types/m, "<option value=\"0\">Run");
// editPanelFormGroupRunType.appendChild(editPanelRunTypeField);
//
// const editPanelRunTypeDontChange = document.createElement('option');
// editPanelRunTypeDontChange.innerText = 'Don\'t change the ride type';
// editPanelRunTypeDontChange.value = '';
// editPanelRunTypeDontChange.selected = true;
// editPanelRunTypeField.insertAdjacentElement('afterbegin', editPanelRunTypeDontChange);

const ShoesOptions = document.getElementById('gear_shoe');
const editPanelFormGroupShoes = document.createElement('div');
editPanelFormGroupShoes.classList.add('form-group', 'col-sm-6');
editPanelBody.appendChild(editPanelFormGroupShoes);

const editPanelShoesLabel = document.createElement('label');
editPanelShoesLabel.innerText = 'Shoes';
editPanelFormGroupShoes.appendChild(editPanelShoesLabel);

const editPanelShoesField = document.createElement('select');
editPanelShoesField.id = 'strava-bulk-edit-ride-type';
editPanelShoesField.classList.add('form-control');
editPanelShoesField.innerHTML =  ShoesOptions.innerHTML.replace(/All Shoes/m, "Don't change the shoes");
editPanelFormGroupShoes.appendChild(editPanelShoesField);

const editPanelFormGroup = document.createElement('div');
editPanelFormGroup.classList.add('form-group', 'col-sm-6');
editPanelBody.appendChild(editPanelFormGroup);

const editPanelMedia = document.createElement('div');
editPanelMedia.classList.add('media', 'media-bottom');
editPanelFormGroup.appendChild(editPanelMedia);

const editPanelMediaContent = document.createElement('div');
editPanelMediaContent.classList.add('media-content');
editPanelMedia.appendChild(editPanelMediaContent);

const editPanelMediaBody = document.createElement('div');
editPanelMediaBody.classList.add('media-body');
editPanelMediaContent.appendChild(editPanelMediaBody);

const editPanelVisibilityLabel = document.createElement('label');
editPanelVisibilityLabel.innerText = 'Privacy controls';
editPanelMediaBody.appendChild(editPanelVisibilityLabel);

const editPanelVisibilityField = document.createElement('select');
editPanelVisibilityField.id = 'strava-bulk-edit-visibility';
editPanelVisibilityField.classList.add('form-control');
editPanelMediaBody.appendChild(editPanelVisibilityField);

const editPanelVisibilityOptionDontChange = document.createElement('option');
editPanelVisibilityOptionDontChange.value = '';
editPanelVisibilityOptionDontChange.innerText = 'Don\'t change the privacy';
editPanelVisibilityField.appendChild(editPanelVisibilityOptionDontChange);

const editPanelVisibilityOptionEveryone = document.createElement('option');
editPanelVisibilityOptionEveryone.value = 'everyone';
editPanelVisibilityOptionEveryone.innerText = 'Everyone';
editPanelVisibilityField.appendChild(editPanelVisibilityOptionEveryone);

const editPanelVisibilityOptionFollowers = document.createElement('option');
editPanelVisibilityOptionFollowers.value = 'followers_only';
editPanelVisibilityOptionFollowers.innerText = 'Followers';
editPanelVisibilityField.appendChild(editPanelVisibilityOptionFollowers);

const editPanelVisibilityOptionOnlyMe = document.createElement('option');
editPanelVisibilityOptionOnlyMe.value = 'only_me';
editPanelVisibilityOptionOnlyMe.innerText = 'Only me';
editPanelVisibilityField.appendChild(editPanelVisibilityOptionOnlyMe);

const editPanelMediaActions = document.createElement('div');
editPanelMediaActions.classList.add('media-actions');
editPanelMediaContent.appendChild(editPanelMediaActions);

const editPanelSubmit = document.createElement('button');
editPanelSubmit.id = 'strava-bulk-edit-submit';
editPanelSubmit.type = 'button';
editPanelSubmit.classList.add('btn', 'btn-default');
editPanelSubmit.innerText = 'Update activities';
editPanelMediaActions.appendChild(editPanelSubmit);

const loadingModal = document.createElement('div');
loadingModal.id = 'strava-bulk-edit-loading-modal';
loadingModal.classList.add('modal', 'fade');
document.body.appendChild(loadingModal);
document.body.classList.add('modal-open');

const loadingModalBackdrop = document.createElement('div');
loadingModalBackdrop.id = 'strava-bulk-edit-modal-backdrop';
loadingModalBackdrop.classList.add('modal-backdrop', 'fade');
document.body.appendChild(loadingModalBackdrop);

const loadingModalDialog = document.createElement('div');
loadingModalDialog.classList.add('modal-dialog', 'modal-sm');
loadingModal.appendChild(loadingModalDialog);

const loadingModalContent = document.createElement('div');
loadingModalContent.classList.add('modal-content');
loadingModalDialog.appendChild(loadingModalContent);

const loadingModalBody = document.createElement('div');
loadingModalBody.classList.add('modal-body');
loadingModalContent.appendChild(loadingModalBody);

const loadingModalImage = document.createElement('p');
loadingModalImage.classList.add('text-center');
loadingModalBody.appendChild(loadingModalImage);

const loadingImage = document.createElement('img');
loadingImage.classList.add('strava-bulk-edit-loading-animation');
loadingImage.src = 'data:image/png;base64,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';
loadingImage.alt = 'Strava logo';
loadingModalImage.appendChild(loadingImage);

const loadingModalText = document.createElement('p');
loadingModalText.classList.add('text-center');
loadingModalText.innerText = 'Updating your activities...';
loadingModalBody.appendChild(loadingModalText);

editPanelSubmit.onclick = function(element) {
  const fields = {};

  if (editPanelRideTypeField.value !== '') {
    fields.rideType = editPanelRideTypeField.value;
  }

  if (editPanelBikeField.value !== '') {
    fields.bike = editPanelBikeField.value;
  }

  // if (editPanelRunTypeField.value !== '') {
  //   fields.runType = editPanelRunTypeField.value;
  // }

  if (editPanelShoesField.value !== '') {
    fields.shoes = editPanelShoesField.value;
  }

  if (editPanelVisibilityField.value !== '') {
    fields.visibility = editPanelVisibilityField.value;
  }

  toggleLoadingOverlay();
  setTimeout(updateActivities, 2000, fields);
}

function updateActivities(fields) {
  const quickEdit = document.querySelectorAll('.training-activity-row .quick-edit');
  for (let editButton of quickEdit) {
    editButton.click();
  }

  if (fields.rideType) {
    const rideType = document.querySelectorAll('.training-activity-row select[name="workout_type_ride"]');
    for (let rideTypeField of rideType) {
      rideTypeField.value = fields.rideType;
    }
  }

  if (fields.bike) {
    const bike = document.querySelectorAll('.training-activity-row select[name="bike_id"]');
    for (let bikeField of bike) {
      bikeField.value = fields.bike;
    }
  }

  if (fields.runType) {
    const runType = document.querySelectorAll('.training-activity-row select[name="workout_type_run"]');
    for (let runTypeField of runType) {
      runTypeField.value = fields.runType;
    }
  }

  if (fields.shoes) {
    const shoes = document.querySelectorAll('.training-activity-row select[name="athlete_gear_id"]');
    for (let shoesField of shoes) {
      shoesField.value = fields.shoes;
    }
  }

  if (fields.visibility) {
    const visibility = document.querySelectorAll('.training-activity-row select[name="visibility"]');
    for (let visibilityField of visibility) {
      visibilityField.value = fields.visibility;
    }
  }

  const submit = document.querySelectorAll('.training-activity-row button[type="submit"]');
  for (let submitButton of submit) {
    submitButton.click();
  }

  const nextButton = document.querySelector('button.next_page');
  const previousButton = document.querySelector('button.previous_page');

  if (nextButton != null) {
    nextButton.click();
    setTimeout(updateActivities, 3000, fields);
  } else if (previousButton != null) {
    navigateBack();
  } else {
    toggleLoadingOverlay();
  }
}

function navigateBack() {
  const previousButton = document.querySelector('button.previous_page');

  if (previousButton != null) {
    previousButton.click();
    setTimeout(navigateBack, 3000);
  } else {
    toggleLoadingOverlay();
  }
}

function toggleLoadingOverlay() {
  loadingModal.classList.toggle('in');
  loadingModalBackdrop.classList.toggle('in');
}
