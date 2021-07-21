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
