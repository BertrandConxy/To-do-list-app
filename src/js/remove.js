
import LocalStorageClass from "./local-storage.js"
export default class RemoveActivities {
    static removeAct(target) {
      target.parentNode.parentNode.removeChild(target.parentNode)   
    }

    static removeFromTheStore(description) {
      const activities = LocalStorageClass.getActFromStore();
      const filteredArray = activities.filter((action) => action.description !== description);
      
      filteredArray.forEach((act,indices)=>{
        act.index = indices+1;
      })
      localStorage.setItem('activities', JSON.stringify(filteredArray));
    }
    
}