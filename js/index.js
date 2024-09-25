document.getElementById('go-blog').addEventListener('click', function () {
  window.location.href = './blog.html';
})



document.getElementById('home-btn').addEventListener('click', function() {
  showSectionById('home-section');
  showBtnColorById('home-btn')
})
document.getElementById('history-btn').addEventListener('click', function() {
  showSectionById('history-section');
  showBtnColorById('history-btn');
})



document.getElementById('donate-money').addEventListener('click', function () {
  if (getInputFieldValueById('noakhali-donate') < 0) {
    alert('you are fake')
  }
  else {
  const donateMoney = getInputFieldValueById('noakhali-donate');
  const donateAmount = getTextFieldValueById('donate-amount');
  const mainAmount = getTextFieldValueById('main-amount');

  const donateNumber = donateAmount + donateMoney;
  const mainNumber = mainAmount - donateMoney;

  document.getElementById('main-amount').innerText = mainNumber;
  document.getElementById('donate-amount').innerText = donateNumber;
    
    // history section
    const div = document.createElement('div');
    div.classList.add('border-2');
    div.classList.add('p-3');
    div.classList.add('rounded-md');
    div.classList.add('my-2');
    div.innerHTML = `
    <p class="font-bold">${donateMoney} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
    <p class="text-gray-500">Date: ${new Date().toLocaleString()}</p>
    `;

    document.getElementById('history-section').appendChild(div);

    //!pop up Button added
    document.getElementById("popup").classList.remove("hidden");
    document.getElementById("close-confirmation").addEventListener("click", function () {
        document.getElementById("popup").classList.add("hidden");
      });

  }


})



document.getElementById('donate-money-fani').addEventListener('click', function () {
  if (getInputFieldValueById('fani-donate') < 0) {
    alert('you are fake')
  }
  else {
  const donateMoney = getInputFieldValueById('fani-donate');
  const donateAmount = getTextFieldValueById('donate-amount-fani');
  const mainAmount = getTextFieldValueById('main-amount');

  const donateNumber = donateAmount + donateMoney;
  const mainNumber = mainAmount - donateMoney;

  document.getElementById('main-amount').innerText = mainNumber;
  document.getElementById('donate-amount-fani').innerText = donateNumber;
    
    // history section
    const div = document.createElement('div');
    div.classList.add('border-2');
    div.classList.add('p-3');
    div.classList.add('rounded-md');
    div.classList.add('my-2');
    div.innerHTML = `
    <p class="font-bold">${donateMoney} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
    <p class="text-gray-500">Date: ${new Date().toLocaleString()}</p>
    `;

    document.getElementById('history-section').appendChild(div);

    //!pop up Button added
    document.getElementById("popup").classList.remove("hidden");
    document.getElementById("close-confirmation").addEventListener("click", function () {
        document.getElementById("popup").classList.add("hidden");
      });
  }
})



document.getElementById('donate-money-aid').addEventListener('click', function () {
  if (getInputFieldValueById('aid-donate') < 0) {
    alert('you are fake')
  }
  else {
  const donateMoney = getInputFieldValueById('aid-donate');
  const donateAmount = getTextFieldValueById('donate-amount-aid');
  const mainAmount = getTextFieldValueById('main-amount');

  const donateNumber = donateAmount + donateMoney;
  const mainNumber = mainAmount - donateMoney;

  document.getElementById('main-amount').innerText = mainNumber;
  document.getElementById('donate-amount-aid').innerText = donateNumber;
    
    // history section
    const div = document.createElement('div');
    div.classList.add('border-2');
    div.classList.add('p-3');
    div.classList.add('rounded-md');
    div.classList.add('my-2');
    div.innerHTML = `
    <p class="font-bold">${donateMoney} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
    <p class="text-gray-500">Date: ${new Date().toLocaleString()}</p>
    `;

    document.getElementById('history-section').appendChild(div);

    //!pop up Button added
    document.getElementById("popup").classList.remove("hidden");
    document.getElementById("close-confirmation").addEventListener("click", function () {
    document.getElementById("popup").classList.add("hidden");
    });
  }
})