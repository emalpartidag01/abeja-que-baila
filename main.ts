basic.showLeds(`
    . . # . .
    . # # # .
    . # # # .
    . # # # .
    . . # . .
    `)
basic.forever(function () {
    cuteBot.motors(50, 50)
    basic.pause(200)
    cuteBot.motors(50, 25)
    basic.pause(1000)
    cuteBot.motors(50, 50)
    basic.pause(200)
    cuteBot.motors(50, 50)
    basic.pause(200)
    cuteBot.motors(25, 50)
    basic.pause(1000)
    cuteBot.motors(50, 50)
    basic.pause(200)
})
basic.forever(function () {
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 255, 0, 0)
    basic.pause(200)
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 255, 0)
    basic.pause(1000)
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 255, 0, 0)
    basic.pause(200)
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 255, 0, 0)
    basic.pause(200)
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 0, 255)
    basic.pause(1000)
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 255, 0, 0)
    basic.pause(200)
})
