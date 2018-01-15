import anime from 'animejs';

window.addEventListener("load", onloadFunctions);
window.addEventListener("resize", updateWindowSize);
let dogeTransition = 0

function onloadFunctions() {
    updateWindowSize()
    littleDogeHandlers()
}

function updateWindowSize() {
    dogeTransition = window.innerHeight/2
    animeLittleDoge()
}

function littleDogeHandlers() {
    let littleDoge = document.querySelector('.little-doge-greyscale')
    littleDoge.addEventListener('click', setLittleDogeColour, false)
    littleDoge.addEventListener('click', animeLittleDoge, false)
    littleDoge.addEventListener('click', setBackgroundColourPink, false)
    littleDoge.addEventListener('click', animeBigDoge, false)
}


function setLittleDogeColour() {
    let littleDoge = this
    littleDoge.classList.remove('little-doge-greyscale')
    littleDoge.classList.add('little-doge')
}

function setBackgroundColourPink() {
    let background = document.querySelector('.black-background')
    background.classList.remove('black-background')
    background.classList.add('pink-background')
}

function animeLittleDoge() {
    setTimeout(() => {
        anime({
            targets: 'img.little-doge',
            translateY: [{
                    value: dogeTransition *-1,
                    duration: 1000
                },
                {
                    value: 20,
                    duration: 1000
                }
            ],
            loop: true
        })
    }, 300)
}

function animeBigDoge() {
    setTimeout(() => {
    anime({
        targets: 'img.big-doge',
        translateY: [{
                value: 500,
                duration: 1000
            },
            {
                value: 50,
                duration: 1000
            }
        ],
        autoplay: false,
        loop: true,
    })
    }, 300)
}