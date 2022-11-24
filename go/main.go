//go:build js && wasm

package main

import (
	"math/rand"
	"sort"
)

func main() {
}

//export testSort
func testSort() {
	arr := make([]int, 100_000)
	for _i := range arr {
		arr[_i] = rand.Intn(100)
	}
	temp := make([]int, len(arr))
	for _i := 0; _i < 500; _i++ {
		copy(temp, arr)
		sort.Ints(temp)
	}
}
