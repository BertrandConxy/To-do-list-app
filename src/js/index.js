/* eslint-disable max-classes-per-file */
import '../css/style.css';
import LocalStorageClass from './local-storage.js';
import { StoreActivity } from './local-storage.js';
import RemoveActivities from './remove.js';

const list = document.getElementById('toDo-list');
export let n = 1

class CheckComplete {
  static check() {
    const checkbox = document.querySelectorAll('.check');
    checkbox.forEach((checks) => {
      if (checks.checked === true) {
        checks.parentElement.children[1].classList.add('line-through');
      }
    });
  }
}
class CreateListItem {
  static create(action) {
    const item = document.createElement('li');
    item.innerHTML = `<input type="checkbox" name="check" class="check"
         ${action.completed ? 'checked' : ' '}>
        <p>${action.description}</p> 
        <i class="fas fa-ellipsis-v icon"></i>
        `;
    list.appendChild(item)
    n++
  }
}

class DisplayActivities {
  static display() {
    const activities = LocalStorageClass.getActFromStore();
    activities.sort((a, b) => a.index - b.index);
activities.forEach((action) => {
      CreateListItem.create(action);
    });
  }
}

// Dispay activity list on home page
document.addEventListener('DOMContentLoaded', DisplayActivities.display());
CheckComplete.check();
// Saving the activity when the user click add button
document.querySelector('#input-activity').addEventListener('keyup', (e) => {
if (e.keyCode == 13 ) {
  const index = n
  const descrip = document.getElementById('input-activity').value;
  const complete = false

  //   create activity object
  const activity = new StoreActivity(index, descrip, complete);
  // add it to local storage
  LocalStorageClass.addActToStore(activity);
  
  // append the Activity to the book list
  CreateListItem.create(activity);
  // refresh the page
  location.reload()
  
  //  Reseting the input
  const input = document.querySelector('#input-activity');
  input.value = ' '
}
});

const moreIcon = document.querySelectorAll('.icon')
moreIcon.forEach((icon)=> {
  icon.addEventListener('click', ()=>{
    icon.innerHTML=`<i class="fas fa-trash-alt"></i>`
  })
})
moreIcon.forEach((more) => {
  more.addEventListener('click', (e)=> {
    RemoveActivities.removeAct(e.target)
    RemoveActivities.removeFromTheStore(e.target.parentElement.children[1].innerHTML)
    n--
  })
})
