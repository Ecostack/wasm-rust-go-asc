//go:build js && wasm

package main

import (
	"math/rand"
	"sort"
)

func main() {
}

type SortInt []int32

func (c SortInt) Len() int           { return len(c) }
func (c SortInt) Swap(i, j int)      { c[i], c[j] = c[j], c[i] }
func (c SortInt) Less(i, j int) bool { return c[i] < c[j] }

//export testSort
func testSort() {
    length := 100_000
	arr := make(SortInt, length)
	for _i := range arr {
		arr[_i] = int32(rand.Intn(100))
	}
	temp := make(SortInt, length)
	for _i := 0; _i < 500; _i++ {
	    for j := 0; j < length; j++ {
            temp[j] = arr[j]
        }
        sort.Stable(temp)
	}
}
