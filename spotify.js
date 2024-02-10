
let btns = document.getElementsByClassName("button");

for (let i = 0; i < btns.length; i++) {
    btns[i].style.cursor = "pointer";
}

let whitehover = document.getElementsByClassName('white-hover')

for (let i = 0; i < whitehover.length; i++) {
    whitehover[i].addEventListener(
        "mouseenter",
        () => {
            this.classList.add('active');
        })
    whitehover[i].addEventListener(
        "mouseleave",
        () => {
            this.classList.remove('active');
        })
}

let underline = document.getElementsByClassName('underline');
for (let i = 0; i < underline.length; i++) {
    underline[i].addEventListener(
        "mouseenter",
        ( ) => {
            this.classList.add('whiteline');
        })
    underline[i].addEventListener(
        "mouseleave",
        () => {
            this.classList.remove('whiteline');

        })    
}
let growbtn = document.getElementsByClassName('growbtn');
for (let i = 0; i < growbtn.length; i++) {
    growbtn[i].addEventListener(
        "mouseenter",
        ( ) => {
            this.classList.add('growbutton');
        })
        growbtn[i].addEventListener(
        "mouseleave",
        () => {
            this.classList.remove('growbutton');

        })    
}


