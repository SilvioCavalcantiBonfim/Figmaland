const dropdown_menu = document.getElementById("dropdown__content");
const bt_dropdown = document.getElementById("button__dropdown");

var dropdown = false;

bt_dropdown?.addEventListener('click', () => {
      if (dropdown) {
        dropdown_menu?.classList.remove('scale-in-ver-top');
        dropdown_menu?.classList.add('scale-out-ver-top');
      } else {
        dropdown_menu?.classList.remove('scale-out-ver-top');
        dropdown_menu?.classList.add('scale-in-ver-top');
      }
      dropdown = !dropdown;
    });