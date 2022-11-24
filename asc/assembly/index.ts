// The entry file of your WebAssembly module.

export function testSort(): void {
    const length = 100_000
    let arr = new Array<u32>(length)
    for (let i = 0; i < arr.length; i++) {
        let value = i32((Math.random() * 2.0 - 1.0) * 100)
        arr[i] = value
    }
    let temp = new Array<u32>(length)
    for (let i = 0; i < 500; i++) {
        for (let j = 0; j < length; j++) {
            temp[j] = arr[j]
        }

        temp.sort()
    }
}
