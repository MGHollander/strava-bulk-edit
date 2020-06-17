#!/usr/bin/env bash

source "$(dirname "$0")/common.sh"

log "--------- Build extension ---------"

log "Go to project root"
cd "$(cd -P -- "$(dirname -- "$0")" && pwd -P)/.." || exit 1

if [ ! -d build ]; then
  log "Create a build directory"
  mkdir build
else
  log "Empty the build directory"
  rm -r build/*
fi

log "Create an archive to release"
zip -r -j "build/strava-bulk-edit-$(date +'%Y-%m-%d-%H-%M-%S').zip" src/extension

log "========= End of build ========="
