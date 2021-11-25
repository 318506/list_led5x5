def on_button_pressed_a():
    global _type
    _type = 2
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global _type
    _type = 0
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    global _type, listt
    _type = 3
    listt = [[1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1]]
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global _type
    _type = 1
input.on_button_pressed(Button.B, on_button_pressed_b)

listt: List[List[number]] = []
_type = 0
item: List[number] = []
_type = 0
list2 = [[0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0]]

def on_forever():
    global item
    for y in range(5):
        for x in range(5):
            if list2[y][x] == 1:
                led.plot_brightness(x, y, 255)
            else:
                led.unplot(x, y)
    list2.unshift(list2.pop())
    if _type == 1:
        for y2 in range(5):
            item = list2[y2]
            item.unshift(item.pop())
        basic.pause(100)
    elif _type == 2:
        for y3 in range(5):
            item = list2[y3]
            item.append(item.shift())
        basic.pause(100)
    elif _type == 3:
        for y4 in range(5):
            for x2 in range(5):
                if listt[y4][x2] == 1:
                    led.plot_brightness(x2, y4, randint(0, 225))
                else:
                    led.unplot(x2, y4)
    elif _type == 0:
        for index in range(5):
            list2.append(list2.shift())
    basic.pause(100)
basic.forever(on_forever)
