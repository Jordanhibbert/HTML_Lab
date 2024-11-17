








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
