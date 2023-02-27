let water = 0
input.onButtonPressed(Button.A, function () {
    music.setVolume(255)
    basic.showLeds(`
        . # . . .
        # # . . #
        . . # . #
        . . # # .
        # # . . #
        `)
    music.playTone(220, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(220, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(220, music.beat(BeatFraction.Whole))
    basic.pause(200)
    music.playTone(175, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Whole))
    basic.pause(200)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(349, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(220, music.beat(BeatFraction.Whole))
})
basic.forever(function () {
    water = 0
    music.setVolume(500)
})
