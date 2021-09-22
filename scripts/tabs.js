const tabHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabContentElems = document.querySelectorAll('[data-tabs-field]');

for (let btn of tabHandlerElems) {
  btn.addEventListener('click', () => {
    tabHandlerElems.forEach(item => {
      item.classList.remove('design-list__item_active');
      btn.classList.add('design-list__item_active');

      tabContentElems.forEach(content => {
        if (content.dataset.tabsField === btn.dataset.tabsHandler) {
          content.classList.remove('hidden');
        } else {
          content.classList.add('hidden');
        }
      });
    });
  });
}
