let water = 0
basic.forever(function () {
    water = 0
    music.setVolume(500)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    music.playMelody("C5 B C5 B C5 B C5 B ", 500)
})
