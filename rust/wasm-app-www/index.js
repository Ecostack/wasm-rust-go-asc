import * as wasm from "wasm-zkpp";


measureTime(5,()=>wasm.testSort())

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
