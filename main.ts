input.onPinPressed(TouchPin.P0, function () {
    fails += 1
    basic.showLeds(`
        . . . . .
        . # . # .
        # # # # #
        . # # # .
        . . # . .
        `)
})
input.onButtonPressed(Button.A, function () {
    fails = 0
})
let fails = 0
basic.showIcon(IconNames.Heart)
fails = 0
basic.showNumber(fails)
basic.forever(function () {
    basic.showNumber(fails)
})
