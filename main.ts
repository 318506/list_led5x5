input.onButtonPressed(Button.A, function () {
    _type = 2
})
input.onButtonPressed(Button.AB, function () {
    _type = 3
})
input.onButtonPressed(Button.B, function () {
    _type = 1
})
let index: number[] = []
let _type = 0
_type = 0
let list = [
[
0,
1,
0,
0,
0
],
[
0,
1,
0,
0,
0
],
[
0,
1,
0,
0,
0
],
[
0,
1,
1,
0,
0
],
[
0,
1,
0,
0,
0
]
]
basic.forever(function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            if (list[y][x] == 1) {
                led.plot(x, y)
            } else {
                led.unplot(x, y)
            }
        }
    }
    list.unshift(list.pop())
    basic.pause(100)
    if (_type == 1) {
        for (let y = 0; y <= 4; y++) {
            index = list[y]
            index.unshift(index.pop())
        }
        basic.pause(100)
    } else if (_type == 2) {
        for (let y = 0; y <= 4; y++) {
            index = list[y]
            index.push(index.shift())
        }
        basic.pause(100)
    } else if (_type == 3) {
        basic.clearScreen()
        basic.pause(100)
    }
})
