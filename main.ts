function 줄넘기_횟수_10증가_표시 () {
    if (줄넘기횟수 % 10 == 0) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(1000)
    }
}
function 줄넘기일의자리수_4출력 () {
    if (줄넘기횟수 % 10 == 4) {
        basic.showLeds(`
            . . # # .
            . # . # .
            # . . # .
            # # # # #
            . . . # .
            `)
        basic.pause(1000)
    }
}
function 움직임변화크기측정 () {
    움직임변화크기 = Math.abs(input.acceleration(Dimension.X) - 평상시움직임값)
}
function 줄넘기일의자리수_8출력 () {
    if (줄넘기횟수 % 10 == 8) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
        basic.pause(1000)
    }
}
function 줄넘기일의자리수_6출력 () {
    if (줄넘기횟수 % 10 == 6) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
        basic.pause(1000)
    }
}
function 줄넘기일의자리수_3출력 () {
    if (줄넘기횟수 % 10 == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
        basic.pause(1000)
    }
}
function 평상시움직임측정 () {
    평상시움직임값 = input.acceleration(Dimension.X)
}
function 줄넘기일의자리수_9출력 () {
    if (줄넘기횟수 % 10 == 9) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            `)
        basic.pause(1000)
    }
}
function 줄넘기일의자리수_1출력 () {
    if (줄넘기횟수 % 10 == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        basic.pause(1000)
    }
}
function 줄넘기횟수에따라이미지와소리출력 () {
    줄넘기일의자리수_1출력()
    줄넘기일의자리수_2출력()
    줄넘기일의자리수_3출력()
    줄넘기일의자리수_4출력()
    줄넘기일의자리수_5출력()
    줄넘기일의자리수_6출력()
    줄넘기일의자리수_7출력()
    줄넘기일의자리수_8출력()
    줄넘기일의자리수_9출력()
    줄넘기_횟수_10증가_표시()
}
function 줄넘기일의자리수_2출력 () {
    if (줄넘기횟수 % 10 == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
        basic.pause(1000)
    }
}
function 줄넘기횟수측정 () {
    if (움직임변화크기 > 700) {
        줄넘기횟수 = 줄넘기횟수 + 1
    }
}
function 줄넘기일의자리수_5출력 () {
    if (줄넘기횟수 % 10 == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
        basic.pause(1000)
    }
}
function 줄넘기일의자리수_7출력 () {
    if (줄넘기횟수 % 10 == 7) {
        basic.showLeds(`
            # # # # #
            . . . . #
            . . . # .
            . . # . .
            . . # . .
            `)
        basic.pause(1000)
    }
}
let 평상시움직임값 = 0
let 움직임변화크기 = 0
let 줄넘기횟수 = 0
줄넘기횟수 = 0
평상시움직임측정()
basic.forever(function () {
    움직임변화크기측정()
    줄넘기횟수측정()
    줄넘기횟수에따라이미지와소리출력()
})
