#!/bin/bash
wasm-pack build --scope "ecostack"
cd wasm-app-www && npm install && npm run build
