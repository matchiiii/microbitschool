let water = 0
input.onButtonPressed(Button.A, function () {
    music.playMelody("A B C5 - - - - - ", 320)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        . # # # .
        `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        . # # # .
        `)
})
basic.forever(function () {
    water = 0
    music.setVolume(500)
})
