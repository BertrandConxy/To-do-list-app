/**
 * @jest-environment jsdom
 */

import LocalStorageClass, { StoreActivity } from './add-remove-localstorage.js';
import CreateListItem from './create-list.js';
import RemoveActivities from './UI-remove-task.js';

describe('Addition and removal of the task from local storage', () => {
  test('add task to storage', () => {
    const activity = new StoreActivity(1, 'Do sports', false);
    LocalStorageClass.addActToStore(activity);
    const tasks = LocalStorageClass.getActFromStore();
    expect(tasks).toEqual([{
      index: 1,
      description: 'Do sports',
      complete: false,
    }]);
  });

  test('Remove task from storage', () => {
    const activity = new StoreActivity(1, 'Do sports', false);
    LocalStorageClass.addActToStore(activity);
    LocalStorageClass.removeFromTheStore('Do sports');
    const tasks = LocalStorageClass.getActFromStore();
    expect(tasks).toEqual([]);
  });
});

describe('appending and removing task from UI', () => {
  test('appending to UI', () => {
    document.body.innerHTML = '<ul id="toDo-list"></ul>';
    const activity1 = new StoreActivity(1, 'Do sports', false);
    const activity2 = new StoreActivity(2, 'Drink water', false);
    CreateListItem.create(activity1);
    CreateListItem.create(activity2);
    const list = document.getElementById('toDo-list');
    expect(list.childElementCount).toBe(2);
  });

  test('remove task from UI', () => {
    document.body.innerHTML = '<ul id="toDo-list"></ul>';
    const activity1 = new StoreActivity(1, 'Do sports', false);
    const activity2 = new StoreActivity(2, 'Drink water', false);
    CreateListItem.create(activity1);
    CreateListItem.create(activity2);
    const trashIcon = document.querySelector('.icon');
    trashIcon.click();
    RemoveActivities.removeAct(trashIcon);
    const list = document.getElementById('toDo-list');
    expect(list.childElementCount).toEqual(1);
  });
});
