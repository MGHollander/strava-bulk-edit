#!/usr/bin/env bash

source "$(dirname "$0")/common.sh"

log "--------- Build extension ---------"

log "Go to project root"
cd "$(cd -P -- "$(dirname -- "$0")" && pwd -P)/.." || exit 1

if [ ! -d build ]; then
  log "Create a build directory"
  mkdir build || exit 1
else
  log "Empty the build directory"
  rm -r build/* || exit 1
fi

log "Go to extension dir"
cd src/extension || exit 1

log "Create an archive to release"
zip -r "../../build/strava-bulk-edit-$(date +'%Y-%m-%d-%H-%M-%S').zip" . || exit 1

log "========= End of build ========="
