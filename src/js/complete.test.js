/**
 * @jest-environment jsdom
 */
import LocalStorageClass, { StoreActivity } from './add-remove-localstorage.js';
import CreateListItem from './create-list.js';
import CheckComplete from './check-complete.js';

describe('update complete task', () => {
  test('update complete status', () => {
    document.body.innerHTML = '<ul id="toDo-list"></ul>';
    const activity1 = new StoreActivity(1, 'Do sports', false);
    LocalStorageClass.addActToStore(activity1);

    CreateListItem.create(activity1);
    const checkBox =
      document.getElementById('toDo-list').children[0].children[0];
    CheckComplete.updateComplete();
    checkBox.click();
    const activities = LocalStorageClass.getActFromStore();
    expect(activities).toEqual([
      {
        index: 1,
        description: 'Do sports',
        complete: true,
      },
    ]);
  });
});
