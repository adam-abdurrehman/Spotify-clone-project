const pictureFilenames = ['Mahirzain.jpg', 'Humood.jpg', 'Omeresa.jpg', 'HarisJ..jpg', 'FaisalLatif.jpg', 'AhmadHussain.jpg', 'Muad.jpg', 'NadeemMuhammad.jpg', 'Reaf.jpg', 'SamiYosaf.jpg', 'ZainBhikha.jpg'];

function generatePictureCards() {
    // Get container element
    const cardContainer = document.getElementById('sportify-playlist-section1');

    // Generate HTML for each picture card
    const html = pictureFilenames.map(filename => `
        <div class="sportify-playlist-card button hover-layer" style=" 
            position: relative;
            width: 20vh;
            height: 35vh;
            align-items: flex-start;
            padding: 1px 0 0 0;
            border-radius: 8px;
            flex-direction: column;
            background-color: #181818;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            border: 1px solid #fff;
            gap: 5px;">
            <div class="hover-layer-container" style="  
                position: absolute;
                width: 25vh;
                height: 35vh;
                border-radius: 8px;
                background-color: #282828;
                opacity: 1;
                z-index: -1;">
            </div>
            <div class="sportify-playlist-img" style="
                background-image : url(${filename});
                width: 20vh;
                height: 20vh;
                background-position: center center;
                background-size: cover;
                border-radius: 50%;
                box-shadow: 0 0 10px #000000bd;
                margin: auto;
                z-index: 10;
                box-shadow: 0 2px 15px #000;">
            </div>
            <div class="playbtn" style="
                position: absolute;
                width: 5vh;
                height: 5vh;
                z-index: 20;
                background-color: #1ed760;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                bottom: 30%;
                z-index: 100;
                margin:  0 0 0 150px;
                opacity: 0;
                transition: .4s all ease;
                cursor: pointer;">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" data-encore-id="icon"
                    role="img" aria-hidden="true" viewBox="0 0 24 24" class="Svg-sc-ytk21e-0 bneLcE">
                    <path
                        d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z">
                    </path>
                </svg>
            </div>
            <div class="card-text" style="
                flex-direction: column;
                width: auto;
                height: 8vh;
                align-items: flex-start;
                justify-content: flex-start;
                margin: 15px 0 0 15px;
                padding-top: 0;
                z-index: 10;">
                <h4 style="margin: 0;">${filename.slice(0, -4)}</h4>
                <span>Artist</span>
            </div>
        </div>
    `).join(''); // Use join to convert array of HTML strings into a single string

    // Update container with HTML
    cardContainer.innerHTML = html;
}

generatePictureCards();

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
        () => {
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
        () => {
            this.classList.add('growbutton');
        })
    growbtn[i].addEventListener(
        "mouseleave",
        () => {
            this.classList.remove('growbutton');

        })
}



