const hw = document.getElementById('hw')
console.log('hw')
hw.addEventListener('mouseover', function () {
  hw.style.color = 'green'
  this.innerText = `The mouse is here`
});
hw.addEventListener('mouseout', function () {
  hw.style.color = 'red'
  this.innerText = `The mouse is gone`
});
const ctr = document.getElementById('container')
console.log('ctr')
ctr.addEventListener('click', function () {
  hw.style.color = 'pink'
  hw.innerHTML = `This is a left click`
});
ctr.addEventListener('contextmenu', function () {
  hw.style.color = 'blue'
  hw.innerText = `This is a right click`
});
ctr.addEventListener('fullscreenchange', function () {
  hw.style.color = 'black'
  hw.innerText = `You just resized`
});
document.addEventListener('fullscreenchange', (event) => {
  // document.fullscreenElement will point to the element that
  // is in fullscreen mode if there is one. If there isn't one,
  // the value of the property is null.
  if (document.fullscreenElement) {
    console.log(`Element: ${document.fullscreenElement.ctr} entered full-screen mode.`);
  } else {
    console.log('Leaving full-screen mode.');
  }
});