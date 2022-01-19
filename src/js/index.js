/* eslint-disable max-classes-per-file */
import '../css/style.css';
import LocalStorageClass, { StoreActivity } from './add-remove-localstorage.js';
import RemoveActivities from './UI-remove-task.js';

const list = document.getElementById('toDo-list');
let counter = 1;

class CreateListItem {
  static create(action) {
    const item = document.createElement('li');
    item.innerHTML = `<input type="checkbox" name="check" class="check"
         ${action.completed ? 'checked' : ' '}>
        <p contenteditable="true" class="par">${action.description}</p> 
        <i class="fas fa-trash-alt icon"></i>
        `;
    list.appendChild(item);
    counter += 1;
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

// Saving the activity when the user click enter
document.querySelector('#input-activity').addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    const index = counter;
    const descrip = document.getElementById('input-activity').value;
    const complete = false;

    //   create activity object
    const activity = new StoreActivity(index, descrip, complete);
    // add it to local storage
    LocalStorageClass.addActToStore(activity);

    // append the Activity to the book list
    CreateListItem.create(activity);
    // refresh the page
    window.location.reload();

    //  Reseting the input
    const input = document.querySelector('#input-activity');
    input.value = ' ';
  }
});

// Removing activity from the list
const trashIcon = document.querySelectorAll('.icon');
trashIcon.forEach((more) => {
  more.addEventListener('click', (e) => {
    RemoveActivities.removeAct(e.target);
    LocalStorageClass.removeFromTheStore(e.target.parentElement.children[1].innerHTML);
    counter -= 1;
  });
});

// editing and Updating the the task description when the user clicks on it

const paragraphs = document.querySelectorAll('.par');
paragraphs.forEach((paragraph, indice) => {
  paragraph.addEventListener('keyup', (e) => {
    const activities = LocalStorageClass.getActFromStore();
    activities.forEach((act) => {
      if (act.index === indice + 1) {
        act.description = e.target.innerHTML;
        localStorage.setItem('activities', JSON.stringify(activities));
      }
    });
  });
});
