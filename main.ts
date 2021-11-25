/**
 * 這個也用用看
 * 
 * (跟隔壁那一大串對調)
 */
input.onButtonPressed(Button.A, function () {
    _type = 2
})
input.onGesture(Gesture.Shake, function () {
    _type = 0
})
input.onButtonPressed(Button.AB, function () {
    _type = 3
    listt = [
    [
    1,
    1,
    1,
    1,
    1
    ],
    [
    1,
    1,
    1,
    1,
    1
    ],
    [
    1,
    1,
    1,
    1,
    1
    ],
    [
    1,
    1,
    1,
    1,
    1
    ],
    [
    1,
    1,
    1,
    1,
    1
    ]
    ]
})
input.onButtonPressed(Button.B, function () {
    _type = 1
})
let listt: number[][] = []
let _type = 0
let item : number[] = []
_type = 0
let list2 = [
[
0,
0,
0,
0,
0
],
[
0,
0,
1,
0,
0
],
[
0,
1,
1,
1,
0
],
[
1,
1,
1,
1,
1
],
[
0,
0,
0,
0,
0
]
]
/**
 * 這可以用來玩遊戲欸
 * 
 * (看什麼時候晃動會剛好回到原本的圖形)
 * 
 *   不過僅限於用三角形的時候
 */
/**
 * 這絕對不是因為我懶得改了
 */
basic.forever(function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            if (list2[y][x] == 1) {
                led.plotBrightness(x, y, 255)
            } else {
                led.unplot(x, y)
            }
        }
    }
    list2.unshift(_py.py_array_pop(list2))
    if (_type == 1) {
        for (let y2 = 0; y2 <= 4; y2++) {
            item = list2[y2]
            item.unshift(_py.py_array_pop(item))
        }
        basic.pause(100)
    } else if (_type == 2) {
        for (let y3 = 0; y3 <= 4; y3++) {
            item = list2[y3]
            item.push(item.shift())
        }
        basic.pause(100)
    } else if (_type == 3) {
        for (let y4 = 0; y4 <= 4; y4++) {
            for (let x2 = 0; x2 <= 4; x2++) {
                if (listt[y4][x2] == 1) {
                    led.plotBrightness(x2, y4, randint(0, 225))
                } else {
                    led.unplot(x2, y4)
                }
            }
        }
    } else if (_type == 0) {
        for (let index = 0; index < 5; index++) {
            list2.push(list2.shift())
        }
    }
    basic.pause(100)
})
