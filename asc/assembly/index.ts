// The entry file of your WebAssembly module.

export function testSort(): void {
    const length = 100_000
    let arr = new Array<i32>(length)
    for (let i = 0, len = arr.length; i < len; i++) {
        unchecked(arr[i] = i32(Math.random() * 100))
    }
    let temp = new Array<i32>(length)
    for (let i = 0; i < 500; i++) {
        for (let j = 0, len = arr.length; j < len; j++) {
            unchecked(temp[j] = arr[j])
        }
        temp.sort()
    }
}
