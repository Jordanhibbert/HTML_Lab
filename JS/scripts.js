// Greeting -------------------------------------------------------

const greetingContainer = document.getElementById('greeting');
const currentHour = new Date().getHours();

let greetingText = '';
let greetingClass = '';

if (currentHour < 12) {
    greetingText = 'Good morning!';
    greetingClass = 'morning';
} else if (currentHour >= 12 && currentHour < 17) {
    greetingText = 'Good afternoon!';
    greetingClass = 'afternoon';
} else {
    greetingText = 'Good evening!';
    greetingClass = 'evening';
}

greetingContainer.textContent = greetingText;
greetingContainer.classList.add(greetingClass);

// Button Alert -----------------------------------------------------------

const alertButton = document.getElementById('alert');

alertButton.addEventListener('click', function () {
    alert('Howdy!');
});

alertButton.addEventListener('mouseover', function () {
    alertButton.innerHTML = 'Do Not Press!';
});

alertButton.addEventListener('mouseout', function () {
    alertButton.innerHTML = 'Press Me!';
});

// Ordered list ------------------------------------------------------------

const numbersList = document.getElementById('numbers');

for (let i = 1; i <= 12; i = i + 1) {

  const listItem = document.createElement('li');
  
  if (i % 2 === 0) {
    listItem.textContent = 'Even';
  } else {
    listItem.textContent = 'Odd';
  }
  
  numbersList.appendChild(listItem);
}

// footer 1 year ------------------------------------------------------------
const currentYear = new Date().getFullYear();

const homepageFooter = document.querySelector('footer p');
if (homepageFooter) {
  homepageFooter.innerHTML = `&copy; Jordan Hibbert, ${currentYear}. You can find me on 
  <a href="https://www.linkedin.com/in/JordanHibbert/" target="_blank">LinkedIn</a> and my 
  <a href="https://www.jordanhibbert.com/" target="_blank">Other Site</a>`;
  console.log(`Today's date: ${new Date().toDateString()}`);
}

// footer 2 ------------------------------------------------------------
const otherFooter = document.querySelector('footer nav');
if (otherFooter) {
  const copyright = document.createElement('p');
  copyright.innerHTML = `&copy; Jordan Hibbert, ${currentYear}. All rights reserved.`;
  otherFooter.after(copyright);
  console.log(`Today's date: ${new Date().toDateString()}`);
}
