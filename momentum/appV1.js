// [html 요소 접근]
/**
 * getElementById : 하나의 값을 반환
 * getElementByClassName : return array
 * getElementByTagName : return array
 * querySelector : 가장 앞의 값만 가져온다. 
 * querySelectorAll : 배열을 반환한다.
*/

// id를 찾을 때 #을 붙혀줘야함.
//const title = document.querySelector("#hel")
// const title = document.getElementById("hel")



// [ addEventListener ]
// [MDN링크](https://developer.mozilla.org/ko/docs/Web/API/HTMLElement)
/*
const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    title.style.color = "blue";
}

function pointerLeave() {
    title.innerText = "Mouse Is Here";
}

function handleMouseLeave() {
    title.innerText = " Mouse IS Gone";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", pointerLeave);
title.addEventListener("mouseleave", handleMouseLeave);
*/



// [ Windows ]
/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.style.color = "blue";
}

function pointerLeave() {
    h1.innerText = "Mouse Is Here";
}

function handleMouseLeave() {
    h1.innerText = " Mouse IS Gone";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert('Noop!!')
}

function handleWindowOffline() {
    alert("sos no WIFI")
}


// h1.onclick = handleTitleClick;
// h1.onmouseenter = pointerLeave;
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", pointerLeave);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
*/