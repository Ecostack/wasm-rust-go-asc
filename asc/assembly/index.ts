// The entry file of your WebAssembly module.

export function testSort(): void {
    const length = 100_000
    let arr = new Array<i32>(length)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = i32(Math.floor(Math.random() * 100))
    }
    let temp = new Array<i32>(length)
    for (let i = 0; i < 500; i++) {
        for (let j = 0; j < length; j++) {
            temp[j] = arr[j]
        }

        temp.sort()
    }
}
