/* eslint-disable max-classes-per-file */
import '../css/style.css';
import LocalStorageClass from './local-storage.js';
import { StoreActivity } from './local-storage.js';

const list = document.getElementById('toDo-list');
let current = 1

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
    item.innerHTML += `<input type="checkbox" name="check" class="check"
         ${action.completed ? 'checked' : ' '}>
        <p> ${action.description}</p> 
        <i class="fas fa-ellipsis-v icon"></i>
        `;
    list.appendChild(item);
    current++
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
  e.preventDefault();
if (e.keyCode == 13 ) {
  const index = current
  const descrip = document.getElementById('input-activity').value;
  const complete = false

  //   create book object
  const activity = new StoreActivity(index, descrip, complete);
  // add it to local storage
  LocalStorageClass.addActToStore(activity);
  // append the book to the book list
  CreateListItem.create(activity);
  //  Reseting the form inputs
  const input = document.querySelector('#input-activity');
  input.reset();
}
});
