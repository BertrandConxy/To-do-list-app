import LocalStorageClass from './add-remove-localstorage.js';

export default class CheckComplete {
  static lineThrough() {
    const checkbox = document.querySelectorAll('.check');
    checkbox.forEach((checks, indice) => {
      const activities = LocalStorageClass.getActFromStore();
      activities.forEach((act) => {
        if (act.index === indice + 1) {
          if (act.complete === true) {
            checks.parentElement.children[1].classList.add('line-through');
          }
        }
      });
    });
  }

  static updateComplete() {
    const checkboxes = document.querySelectorAll('.check');
    checkboxes.forEach((check, indice) => {
      check.addEventListener('change', () => {
        const activities = LocalStorageClass.getActFromStore();
        activities.forEach((act) => {
          if (act.index === indice + 1) {
            if (act.complete === false) {
              act.complete = true;
              check.checked = true;
            } else {
              act.complete = false;
              check.checked = false;
            }
            window.location.reload();
            localStorage.setItem('activities', JSON.stringify(activities));
          }
        });
      });
    });
  }

  static clearCompleted() {
    const activities = LocalStorageClass.getActFromStore();
    const filteredActivities = activities.filter(
      (act) => act.complete === false
    );
    filteredActivities.forEach((acts, indices) => {
      acts.index = indices + 1;
    });
    localStorage.setItem('activities', JSON.stringify(filteredActivities));
  }
}
