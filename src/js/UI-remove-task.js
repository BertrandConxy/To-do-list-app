export default class RemoveActivities {
  static removeAct(target) {
    target.parentNode.parentNode.removeChild(target.parentNode);
  }

  static resetList() {
    localStorage.clear();
  }
}