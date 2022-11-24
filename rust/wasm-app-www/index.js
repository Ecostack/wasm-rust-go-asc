import * as wasm from "wasm-zkpp";


measureTime(5,()=>wasm.testSort())

function measureTime(times,func) {
    console.log("start measuring time")
    console.time("measureTime")
    for (let i = 0; i < times; i++) {
        func()
        console.timeLog("measureTime", i)
    }
    console.timeEnd("measureTime")
}
