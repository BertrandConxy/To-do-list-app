/* eslint-disable max-classes-per-file */

export default class LocalStorageClass {
  static getActFromStore() {
    let activities;
    if (localStorage.getItem('activities') === null) {
      activities = [];
    } else {
      activities = JSON.parse(localStorage.getItem('activities'));
    }
    return activities;
  }

  static addActToStore(activity) {
    const activities = LocalStorageClass.getActFromStore();
    activities.push(activity);
    localStorage.setItem('activities', JSON.stringify(activities));
  }

  static removeFromTheStore(description) {
    const activities = LocalStorageClass.getActFromStore();
    const filteredArray = activities.filter((action) => action.description !== description);

    filteredArray.forEach((act, indices) => {
      act.index = indices + 1;
    });
    localStorage.setItem('activities', JSON.stringify(filteredArray));
  }
}

export class StoreActivity {
  constructor(index, description, complete) {
    this.index = index;
    this.description = description;
    this.complete = complete;
  }
}