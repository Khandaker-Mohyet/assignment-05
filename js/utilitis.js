function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);

  return inputNumber;
}

function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);

  return textNumber;
}


function showSectionById(id) {
  document.getElementById('home-section').classList.add('hidden');
  document.getElementById('history-section').classList.add('hidden');
  
  document.getElementById(id).classList.remove('hidden');
}

function showBtnColorById(id) {

  document.getElementById('home-btn').classList.remove('bg-[#B4F461]')
  document.getElementById('history-btn').classList.remove('bg-[#B4F461]')

  document.getElementById(id).classList.add('bg-[#B4F461]')
}