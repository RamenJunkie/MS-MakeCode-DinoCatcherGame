info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    Friendly_Baby.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Enemy_Car.destroy()
    info.changeLifeBy(-1)
    scene.cameraShake(5, 500)
})
let Enemy_Car: Sprite = null
let Friendly_Baby: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777ffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffff777777777777777ffffffffffffffff77777777777777fffffffffffff777ffffffffffffffffffffffffffffff7777777777777777ffffffffffffffffffffffffffffffffff
    fffffffffffffffff77777777777777777ffffffffffffff7777777777777777fffffffffffff777fffffffffffff777fffffffffffff777777777777777777fffffffffffffffffffffffffffffffff
    fffffffffffffff7777777777fffff77777ffffffffffff77777777777777777fffffffffffff7777ffffffffffff777ffffffffffff77777fffffff77777777ffffffffffffffffffffffffffffffff
    fffffffffffffff777777ffffffffff77777fffffffffff77777ff777ffff777fffffffffffff7777fffffffffff7777fffffffffff777777fffffffffff77777fffffffffffffffffffffffffffffff
    ffffffffffffff77777fffffffffffff77777ffffffffff777ffff7777fffffffffffffffffff77777ffffffffff7777ffffffffff7777777ffffffffffff7777fffffffffffffffffffffffffffffff
    ffffffffffffff777ffffffffffffffff7777ffffffffffffffffff777fffffffffffffffffff77777ffffffffff777fffffffffff7777ffffffffffffffff7777ffffffffffffffffffffffffffffff
    ffffffffffffff777fffffffffffffffff7777fffffffffffffffff777fffffffffffffffffff77777ffffffffff777ffffffffff77777ffffffffffffffff77777fffffffffffffffffffffffffffff
    ffffffffffffff7777ffffffffffffffff7777fffffffffffffffff777fffffffffffffffffff777777fffffffff777ffffffffff7777ffffffffffffffffff7777fffffffffffffffffffffffffffff
    ffffffffffffff7777fffffffffffffffff777fffffffffffffffff777ffffffffffffffffff7777777ffffffff7777ffffffffff777ffffffffffffffffffff777fffffffffffffffffffffffffffff
    fffffffffffffff777fffffffffffffffff777fffffffffffffffff777ffffffffffffffffff77777777fffffff7777ffffffffff777ffffffffffffffffffff777fffffffffffffffffffffffffffff
    fffffffffffffff777fffffffffffffffff7777ffffffffffffffff7777fffffffffffffffff777f7777ffffff7777fffffffffff777ffffffffffffffffffff777fffffffffffffffffffffffffffff
    fffffffffffffff777fffffffffffffffff7777ffffffffffffffff7777ffffffffffffffff7777ff777ffffff7777fffffffffff777fffffffffffffffffff7777fffffffffffffffffffffffffffff
    fffffffffffffff777ffffffffffffffffff777fffffffffffffffff777ffffffffffffffff7777ff777ffffff777ffffffffffff777fffffffffffffffffff7777fffffffffffffffffffffffffffff
    fffffffffffffff777ffffffffffffffffff777fffffffffffffffff7777fffffffffffffff777fff7777ffff7777ffffffffffff777fffffffffffffffffff777ffffffffffffffffffffffffffffff
    fffffffffffffff777ffffffffffffffffff777fffffffffffffffff7777fffffffffffffff777fff7777ffff7777ffffffffffff7777ffffffffffffffffff777ffffffffffffffffffffffffffffff
    fffffffffffffff777ffffffffffffffffff777ffffffffffffffffff777fffffffffffffff777ffff7777ff7777fffffffffffff77777ffffffffffffffff7777ffffffffffffffffffffffffffffff
    fffffffffffffff777ffffffffffffffffff777ffffffffffffffffff777fffffffffffffff777ffff7777ff7777ffffffffffffff77777fffffffffffff777777ffffffffffffffffffffffffffffff
    fffffffffffffff777fffffffffffffffff7777ffffffffffffffffff777fffffffffffffff777fffff77777777ffffffffffffffff777777777ffffff7777777fffffffffffffffffffffffffffffff
    fffffffffffffff777fffffffffffffffff7777ffffffffffffffffff777fffffffffffffff777fffff77777777fffffffffffffffff77777777777777777777ffffffffffffffffffffffffffffffff
    fffffffffffffff777ffffffffffffffff7777fffffffffffffffffff777fffffffffffffff777ffffff777777fffffffffffffffffff77777777777777777ffffffffffffffffffffffffffffffffff
    fffffffffffffff777ffffffffffffff777777ffffffffffff77777777777777777ffffffff777ffffff77777fffffffffffffffffffffffff7777777777ffffffffffffffffffffffffffffffffffff
    fffffffffffffff777ffffffffffff7777777fffffffffffff7777777777777777777ffffff777fffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffff7777ffff7777777777777ffffffffffffff7777777777777777777ffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffff7777777777777777777fffffffffffffffffffffffffffffff7777ffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffff77777777777777777ffffffffffffffffffffffffffffffffff777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffff7777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444ffffffffffffff
    ffffffffffffffffff4444444fffffffffffffff444ffffffffffffff44444444444444444ffffffff444fffffffffffffffffff444ffffff4444444444444ffffff44444444444444444fffffffffff
    fffffffffffffffff444444444ffffffffffffff444fffffffffffff444444444444444444ffffff44444fffffffffffffffffff444ffffff4444444444444fffff444444444444444444fffffffffff
    ffffffffffffffff4444444444ffffffffffffff44444ffffffffff4444444ffff444f4444fffff444444fffffff444fffffffff444fffff44444444444444ff44444444444fffff44444fffffffffff
    fffffffffffffff44444fff4444fffffffffffff44444ffffffffff4444fffffff444ff444fff4444444ffffffff444fffffffff444fffff444fffffffffffff444444ffffffffffff444fffffffffff
    fffffffffffff444444ffff44444fffffffffff4444444fffffffff444ffffffff444ff444ff444444ffffffffff444fffffffff444fffff444fffffffffffff44444fffffffffffff444fffffffffff
    ffffffffffff444444ffffff44444ffffffffff4444444ffffffffffffffffffff444fffff4444444fffffffffff444fffffffff444fffff444fffffffffffff4444ffffffffffffff4444ffffffffff
    fffffffffff444444ffffffff4444fffffffff4444f4444fffffffffffffffffff444ffff444444fffffffffffff444fffffffff444fffff444ffffffffffffff444ffffffffffffff4444ffffffffff
    fffffffffff4444fffffffffff444fffffffff4444f4444fffffffffffffffffff444ffff44444ffffffffffffff444fffffffff444fffff444ffffffffffffff4444ffffffffffffff444ffffffffff
    fffffffffff444ffffffffffffffffffffffff444fff444fffffffffffffffffff444fff4444ffffffffffffffff444fffffffff444fffff444ffffffffffffff4444fffffffffffff4444ffffffffff
    ffffffffff4444ffffffffffffffffffffffff444fff444fffffffffffffffffff444fff4444ffffffffffffffff444fffffffff444fffff444fffffffffffffff444fffffffffffff4444ffffffffff
    ffffffffff4444ffffffffffffffffffffffff444fff444fffffffffffffffffff444ff4444fffffffffffffffff444fffffffff444fffff444fffffffffffffff444ffffffffffff4444fffffffffff
    ffffffffff444ffffffffffffffffffffffff4444fff444fffffffffffffffffff444ff4444fffffffffffffffff444fffffffff444fffff444fffffffffffffff444fffffffffff44444fffffffffff
    ffffffffff444ffffffffffffffffffffffff4444fff444fffffffffffffffffff444ff444ffffffffffffffffff444fffffffff444fffff444fffffffffffffff444ffffffffff44444ffffffffffff
    ffffffffff444ffffffffffffffffffffffff444ffff444fffffffffffffffffff444f4444ffffffffffffffffff444ffff44444444fffff444fffffffffffffff444ffffffff444444fffffffffffff
    ffffffffff444fffffffffffffffffffffff4444ffff4444ffffffffffffffffff444f4444ffffffffffffffffff444f44444444444fffff444fffffffffffffff4444444444444444ffffffffffffff
    ffffffffff444fffffffffffffffffffffff4444ffff4444ffffffffffffffffff444f444fffffffffffffffffff444444444444444fffff444fffffffffffffff444444444444444fffffffffffffff
    ffffffffff444fffffffffffffffffffffff444.44444444fffffffffffffffff4444f444fffffffffffffffffff444444444ff4444fffff44444444444fffffff44444444444444ffffffffffffffff
    ffffffffff4444fffffffffffffffffffff44444444444444ffffffffffffffff4444f444fffffffffffffffffff444444ffffff444fffff44444444444fffffff444fffffff4444ffffffffffffffff
    ffffffffff4444fffffffffffffffffffff44444444444444fffffffffffffff4444ff444fffffffffffffffffff444fffffffff444fffff44444444444fffffff4444ffffff44444fffffffffffffff
    fffffffffff444fffffffffffffffffffff4444444ffff444ffffffffffffff44444ff444fffffffffffffffffff444fffffffff444fffff444fffffffffffffff4444fffffff44444ffffffffffffff
    fffffffffff44444fffffffffffffffffff44444ffffff4444fffffffffffff4444fff444fffffffffffffffffff444fffffffff444fffff444ffffffffffffffff444ffffffff4444ffffffffffffff
    fffffffffff44444ffffffffffffffffff4444ffffffff4444fffffffffffff444ffff444fffffffffffffffffff444fffffffff444fffff444ffffffffffffffff444fffffffff4444fffffffffffff
    ffffffffffff44444fffffffffffffffff4444fffffffff444fffffffffffff444ffff444fffffffffffff444fff444fffffffff444fffff444ffffffffffffffff444fffffffff4444fffffffffffff
    fffffffffffff44444fffffff4444fffff444ffffffffff444fffffffffffff444ffff444ffffffffff444444fff444fffffffff444fffff444ffffffffffffffff444ffffffffff444fffffffffffff
    ffffffffffffff444444444444444ffff4444ffffffffff444ffffffffffff4444ffff4444fffffff44444444fff444fffffffff444fffff4444fffffffffffffff444ffffffffff444fffffffffffff
    fffffffffffffff44444444444444ffff4444ffffffffff444fffffffffff44444ffff4444444444444444444fff444fffffffff444fffff4444fffffffffffffff4444fffffffff4444ffffffffffff
    ffffffffffffffff44444444444ffffff444fffffffffff444fffffffffff4444fffff444444444444444fffffff444fffffffff444ffffff444fffffffffffffff4444fffffffff4444ffffffffffff
    fffffffffffffffffffffffffffffffff444fffffffffff444fffffffffff444ffffffff44444444444fffffffff444fffffffff444ffffff4444fffffffffffffff444ffffffffff444ffffffffffff
    ffffffffffffffffffffffffffffffff4444fffffffffff444fffffffffff444ffffffffffffffffffffffffffff444fffffffff4444fffff44444ffffffffffffff444ffffffffff4444fffffffffff
    ffffffffffffffffffffffffffffffff4444fffffffffff4444ffffffffff444ffffffffffffffffffffffffffffffffffffffff4444ffffff444444ffff444fffff444ffffffffff4444fffffffffff
    ffffffffffffffffffffffffffffffff4444fffffffffff4444fffffffffffffffffffffffffffffffffffffffffffffffffffff4444ffffff4444444444444fffff444ffffffffff4444fffffffffff
    ffffffffffffffffffffffffffffffff444ffffffffffff4444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444444fffff444fffffffffff4444ffffffffff
    ffffffffffffffffffffffffffffffff444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444ffffff444fffffffffff4444ffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444ffffffffffff444ffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.splash("Press A to Start!")
scene.setBackgroundImage(assets.image`Freeway`)
let Player_Mama = sprites.create(assets.image`Mama`, SpriteKind.Player)
controller.moveSprite(Player_Mama, 0, 100)
Player_Mama.setStayInScreen(true)
info.setLife(3)
animation.runImageAnimation(
Player_Mama,
assets.animation`Mama Moving`,
150,
true
)
scroller.scrollBackgroundWithSpeed(-50, 0)
info.startCountdown(15)
forever(function () {
    Friendly_Baby = sprites.createProjectileFromSide(assets.image`Baby`, -90, 0)
    Friendly_Baby.y = randint(15, 115)
    animation.runImageAnimation(
    Friendly_Baby,
    assets.animation`Animated Baby`,
    100,
    true
    )
    pause(1000)
})
forever(function () {
    Enemy_Car = sprites.createProjectileFromSide(assets.image`Tourist`, -90, 0)
    Enemy_Car.y = randint(15, 115)
    Enemy_Car.setKind(SpriteKind.Enemy)
    animation.runImageAnimation(
    Enemy_Car,
    assets.animation`Animated Tourist`,
    100,
    true
    )
    pause(2100)
})
