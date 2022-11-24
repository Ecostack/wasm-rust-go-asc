#!/usr/bin/env bash

#tinygo build -o wasm.wasm -no-debug -target wasm ./main.go
tinygo build -o wasm.wasm -opt=2 -no-debug -target wasm ./main.go