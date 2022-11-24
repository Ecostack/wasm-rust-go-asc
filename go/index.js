const go = new Go();
const importObject = go.importObject;

WebAssembly.instantiateStreaming(fetch("wasm.wasm"), importObject).then(
    (results) => {
        go.run(results.instance);

        measureTime(5, () => results.instance.exports.testSort())
    }
);

function measureTime(times, func) {
    console.log("start measuring time")
    console.time("measureTime")
    for (let i = 0; i < times; i++) {
        func()
        console.timeLog("measureTime", i)
    }
    console.timeEnd("measureTime")
}
