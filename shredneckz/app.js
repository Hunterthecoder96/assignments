const selector = document.querySelector('.selector');

selector.children[0].addEventListener('change', (e) => {
  console.log('changed', e.target.value);
});

const select = selector.children[0];
const dropDown = document.createElement('ul');
dropDown.className = 'selector-options';

[...dropDown.children].forEach((option) => {
  const dropDownOption = document.createElement('li');
  dropDownOption.textContent = option.textContent;
  dropDown.appendChild(dropDownOption);
});

selector.appendChild(dropDown);
