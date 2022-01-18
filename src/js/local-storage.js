export default class LocalStorageClass {
    static getbooksFromStore() {
      let activities;
      if (localStorage.getItem('activities') === null) {
         activities = [];
      } else {
        activities = JSON.parse(localStorage.getItem('activities'));
      }
      return activities;
    }
  
    static addbookToStore(activity) {
      const activities = LocalStorageClass.getbooksFromStore();
      activities.push(activity);
      localStorage.setItem('activities', JSON.stringify(activities));
    }
  
    static removeFromTheStore(title) {
      const books = LocalStorageClass.getbooksFromStore();
      const filteredArray = books.filter((book) => book.title !== title);
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