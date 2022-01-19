class RemoveActivities {
    static removeAct() {
        static removeBook(target) {
            if (target.classList.contains('delete')) {
              target.parentElement.remove();
            }
          }
    }
}