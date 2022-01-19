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
  
    static removeFromTheStore(title) {
      const activities = LocalStorageClass.getActFromStore();
      const filteredArray = books.filter((action) => book.title !== title);
      localStorage.setItem('books', JSON.stringify(filteredArray));
    }
  }

 
export class StoreActivity {
    constructor(index, description,complete) {
        this.index = index,
        this.description = description,
        this.complete = complete
    }

}