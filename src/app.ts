import './normalize.css'
import './index.css'
window.onload = dotFollow;
function dotFollow() {
  let myDiv: HTMLDivElement = <HTMLDivElement>document.querySelector('.dot');
  window.onmousemove = (ev) => {
    // let ofLeft = document.body.offsetLeft;
    // let ofTop = document.body.offsetTop;
    let oTop =ev.clientY;
    let oLeft = ev.clientX;
    myDiv.style.display = "block";
    myDiv.style.left = oLeft.toString()+"px";
    myDiv.style.top = oTop.toString()+"px";
  }
}
