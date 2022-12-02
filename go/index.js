const go = new Go();
const importObject = go.importObject;

WebAssembly.instantiateStreaming(fetch("wasm.wasm"), importObject).then(
    (results) => {
        go.run(results.instance);
        measureTime(5, results.instance.exports.testSort)
    }
);

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
