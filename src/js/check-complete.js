export default class CheckComplete {
  static check() {
    const checkbox = document.querySelectorAll('.check');
    checkbox.forEach((checks) => {
      if (checks.checked === true) {
        checks.parentElement.children[1].classList.add('line-through');
      }
    });
  }
}