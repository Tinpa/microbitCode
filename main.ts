let pitch = 0
let list = [
131,
262,
392,
523,
659,
784,
932
]
basic.forever(function () {
    serial.writeLine("" + (input.rotation(Rotation.Pitch)))
    pitch = Math.map(input.rotation(Rotation.Pitch), -180, 180, 0, 6)
})
