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
    const activities = LocalStorageClass.getbooksFromStore();
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
document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title');
  const author = document.getElementById('author');

  //   create book object
  const book = new CreateBook(title, author);
  // add it to local storage
  LocalStorageClass.addbookToStore(book);
  // append the book to the book list
  CreateBookElements.createBookElement(book);
  //  Reseting the form inputs
  const form = document.querySelector('#form');
  form.reset();
});

//  removing the book when the user clicks remove button

// Remove book from UI
document.querySelector('.book-list').addEventListener('click', (e) => {
  DisplayBookList.removeBook(e.target);

  // remove book from the store
  const child = e.target.parentElement.children[0].firstElementChild.innerHTML;
  LocalStorageClass.removeFromTheStore(child);
});