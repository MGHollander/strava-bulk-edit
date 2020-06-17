#!/usr/bin/env bash

function log() {
  echo -e "\033[34m[$(date +'%F %T')] \033[1m$1\033[0m"
}

function log_error() {
    echo -e "\033[31m$1\033[0m"
}

function log_success() {
    echo -e "\033[32m$1\033[0m"
}

function log_warning() {
    echo -e "\033[33m$1\033[0m"
}
