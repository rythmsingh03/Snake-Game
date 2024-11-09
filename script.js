let direction = { x: 0, y: 0 };
let speed = 5;
let painttime = 0;
let snakearr = [
    { x: 12, y: 12 }
]
food = { x: 11, y: 5 }
let score = 0;

function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime)
    if ((ctime - painttime) / 1000 < 1 / speed) {
        return;
    }
    painttime = ctime;
    gameEngine();
}

function isCollide(snake) {
    for (let i = 1; i < snakearr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }

    if (snake[0].x >= 20 || snake[0].x <= 0 || snake[0].y >= 20 || snake[0].y <= 0) {
        return true;
    }
    return false;
}

function gameEngine() {

    if (isCollide(snakearr)) {
        direction = { x: 0, y: 0 };
        alert("Game Over!!!")
        snakearr = [{ x: 5, y: 10 }];
        score = 0;
    }

    if (snakearr[0].y === food.y && snakearr[0].x === food.x) {
        score += 1;
        scorebox.innerHTML = "Score: " + score;
        snakearr.unshift({ x: snakearr[0].x + direction.x, y: snakearr[0].y + direction.y })
        let a = 1;
        let b = 19;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
    }

    for (let i = snakearr.length - 2; i >= 0; i--) {
        snakearr[i + 1] = { ...snakearr[i] };
    }

    snakearr[0].x += direction.x;
    snakearr[0].y += direction.y;


    board.innerHTML = "";
    snakearr.forEach((e, index) => {
        snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeElement.classList.add("head");
        }
        else {
            snakeElement.classList.add("body");
        }
        board.appendChild(snakeElement);
    });
    foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    board.appendChild(foodElement);
}

window.requestAnimationFrame(main);
window.addEventListener("keydown", e => {
    direction = { x: 0, y: -1 };
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp")
            direction.x = 0;
            direction.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown")
            direction.x = 0;
            direction.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft")
            direction.x = -1;
            direction.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight")
            direction.x = 1;
            direction.y = 0;
            break;

        default:
            break;
    }

})

// window.addEventListener("keydown", e => {
//     direction = { x: 0, y: -1 };
//     direction = { x: 0, y: -1 };
//     switch (e.key) {
//         case "w":
//             console.log("w")
//             direction.x = 0;
//             direction.y = -1;
//             break;

//         case "s":
//             console.log("s")
//             direction.x = 0;
//             direction.y = 1;
//             break;

//         case "a":
//             console.log("a")
//             direction.x = -1;
//             direction.y = 0;
//             break;

//         case "d":
//             console.log("d")
//             direction.x = 1;
//             direction.y = 0;
//             break;

//         default:
//             break;
//     }
// })