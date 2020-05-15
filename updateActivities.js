'use strict';

function updateActivities(fields) {
  const quickEdit = document.querySelectorAll('.training-activity-row .quick-edit');
  for (let editButton of quickEdit) {
    editButton.click();
  }

  const visibility = document.querySelectorAll('.training-activity-row select[name="visibility"]');
  for (let visibilityField of visibility) {
    visibilityField.value = fields.visibility;
  }

  const submit = document.querySelectorAll('.training-activity-row button[type="submit"]');
  for (let submitButton of submit) {
    submitButton.click();
  }

  const nextButton = document.querySelector('button.next_page');
  if (nextButton != null) {
    nextButton.click();
    setTimeout(updateActivities, 3000, fields);
  }
}
