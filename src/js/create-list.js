
export default class CreateListItem {
    static create(action) {
        const list = document.getElementById('toDo-list');
      const item = document.createElement('li');
      item.innerHTML = `<input type="checkbox" name="check" class="check"
           ${action.complete ? 'checked' : ' '}>
          <p contenteditable="true" class="par">${action.description}</p> 
          <i class="fas fa-trash-alt icon"></i>
          `;
      list.appendChild(item);
    }
  }