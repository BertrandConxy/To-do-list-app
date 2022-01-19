/* eslint-disable max-classes-per-file */
import '../css/style.css';

const list = document.getElementById('toDo-list');
const stores = [
  {
    index: 3,
    description: 'Celebrate for the day',
    completed: false,
  },
  {
    index: 2,
    description: 'Complete today project',
    completed: false,
  },
  {
    index: 1,
    description: 'Wake up early',
    completed: false,
  },

];

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
  }
}

class DisplayActivities {
  static display() {
    stores.sort((a, b) => a.index - b.index);
    stores.forEach((action) => {
      CreateListItem.create(action);
    });
  }
}

DisplayActivities.display();
CheckComplete.check();
