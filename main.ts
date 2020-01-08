controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
info.onCountdownEnd(function () {
    scene.cameraShake(3, 500)
    for (let index = 0; index < 9; index++) {
        rocketship.startEffect(effects.fire)
        rocketship.ay += -30
    }
})
let rocketship: Sprite = null
rocketship = sprites.create(img`
. . . . . . f f . . . . . . 
. . . . . f 1 2 f . . . . . 
. . . . f 1 2 2 c f . . . . 
. . . . f 2 2 c c f . . . . 
. . . f c c c c c c f . . . 
. . . f 1 1 1 1 1 1 f . . . 
. . . f 1 1 b b 1 1 f . . . 
. . . f 1 b 1 c b d f . . . 
. . . f 1 b c f b d f . . . 
. . . f 1 1 b b 1 d f . . . 
. . . f 1 1 1 1 d d f . . . 
. . . f d 1 1 d d d f . . . 
. . . f d d d d d b f . . . 
. . f 2 d d 2 c b b c f . . 
. f 2 2 b d 2 c b b c c f . 
f 2 2 c b b c c b b c c c f 
f c c c b b c c b b c c c f 
. f f f f f f f f f f f f . 
`, SpriteKind.Player)
scene.setBackgroundColor(15)
effects.starField.startScreenEffect()
rocketship.y = 110
info.startCountdown(3)
