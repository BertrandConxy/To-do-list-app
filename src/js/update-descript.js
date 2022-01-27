import LocalStorageClass from './add-remove-localstorage.js';

export default function updatePara(paragraphs) {
  paragraphs.forEach((paragraph, indice) => {
    paragraph.addEventListener('click', (e) => {
      const activities = LocalStorageClass.getActFromStore();
      activities.forEach((act) => {
        if (act.index === indice + 1) {
          act.description = e.target.innerHTML;
          localStorage.setItem('activities', JSON.stringify(activities));
        }
      });
    });
  });
}