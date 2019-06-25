export function generateSelectedOptions(from, to) {
  let items = [];
  for (let i = from; i < to; i++) {
    items.push({value: `${i}`, label: `${i}`});
  }
  return items;
}

export function getSelectOptionValue(selectedOption, defaultValue) {
  let selectedValue = (selectedOption && selectedOption.value);
  let result = selectedValue ? selectedValue : defaultValue;
  return result;
}

export function getSelectOptionByIndex(elem) {
  let option = elem.options[elem.selectedIndex];
  let result = {value: elem.value, label: option.innerText};
  return result;
}
