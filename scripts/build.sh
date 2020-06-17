#!/usr/bin/env bash

source "$(dirname "$0")/common.sh"

log "--------- Build extension ---------"

log "Go to project root"
cd "$(cd -P -- "$(dirname -- "$0")" && pwd -P)/.." || exit 1

if [ ! -d "build" ]; then
  mkdir "build"
fi

log "Create an archive for release"
zip -r -j build/extension.zip src/extension

log "========= End of build ========="
