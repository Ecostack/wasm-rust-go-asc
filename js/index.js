function measureTime(times, func) {
    console.log("start measuring time")
    console.time("measureTime")
    for (let i = 0; i < times; i++) {
        func()
        console.timeLog("measureTime", i)
    }
    console.timeEnd("measureTime")
}

function testSort() {
    const arr = new Array(100_000)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.random()
    }
    const temp = new Array(100_000)
    for (let i = 0; i < 500; i++) {
        for (let j = 0; j < arr.length; j++) {
            temp[j] = arr[j]
        }
        temp.sort()
    }
}

measureTime(5, () => testSort())
