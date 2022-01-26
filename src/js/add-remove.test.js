/**
 * @jest-environment jsdom
 */

import LocalStorageClass, {StoreActivity}from "./add-remove-localstorage.js";
import CreateListItem from "./create-list.js";

describe('Addition and removal of the task', ()=>{
    test('add task to storage', ()=>{
        const activity = new StoreActivity(1,'Do sports', false);
        LocalStorageClass.addActToStore(activity);
        const tasks = LocalStorageClass.getActFromStore()
        expect(tasks).toEqual([{
            index: 1,
            description: 'Do sports',
            complete: false
        }])
    })
})
