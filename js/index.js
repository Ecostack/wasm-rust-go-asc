function measureTime(times, func) {
    document.writeln("<div>measure time START</div>")

    let start = performance.now()
    let tick = performance.now()
    for (let i = 0; i < times; i++) {
        func()
        document.writeln("<div>" + "measure time tick " + String(i) + " :> " + String(Math.round(performance.now() - tick)) + "ms" + "</div>")
        tick = performance.now()
    }
    let total = performance.now() - start
    document.writeln("<div>" + "measure time END, average:> " + Math.round(total / times) + "ms" + "</div>")
}

function testSort() {
    const length = 100_000
    const arr = new Array(length)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.random() * 100 | 0
    }
    const temp = new Array(length)
    for (let i = 0; i < 500; i++) {
        for (let j = 0; j < arr.length; j++) {
            temp[j] = arr[j]
        }
        temp.sort((a, b) => a - b)
    }
}

measureTime(5, testSort)
