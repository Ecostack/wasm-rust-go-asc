use rand::prelude::*;
use wasm_bindgen::prelude::*;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen(js_name = testSort)]
pub fn test_sort() {
    const LENGTH: usize = 100_000;
    let mut rng = rand::rngs::SmallRng::seed_from_u64(0);
    let arr: [i32; LENGTH] = core::array::from_fn(|_| rng.gen_range(0..100));
    let mut temp: [i32; LENGTH];
    for _ in 0..500 {
        temp = arr;
        temp.sort_unstable();
    }
}
