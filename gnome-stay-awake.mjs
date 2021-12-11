#!/usr/bin/env node

import {execSync} from 'child_process'

const originalDelay = execSync(`gsettings get org.gnome.desktop.session idle-delay`)
  .toString('utf-8').split(' ')[1].trim()

console.info(`original idle-delay ${originalDelay} seconds`)

function stayAwake() {
  execSync(`gsettings set org.gnome.desktop.lockdown disable-lock-screen 'true'`)
  execSync(`gsettings set org.gnome.desktop.session idle-delay 0`)

  // keep the process alive until ctrl-c
  setInterval(() => {
  }, 10000)
}

function restore() {
  console.info("re-enabling screen lock")

  execSync(`gsettings set org.gnome.desktop.lockdown disable-lock-screen 'false'`)
  execSync(`gsettings set org.gnome.desktop.session idle-delay ${originalDelay}`)

  process.exit(0)
}

process.once('exit', restore)
process.once('SIGINT', restore)
process.once('SIGTERM', restore)

stayAwake()

console.info(`screen lock and idle timeout disabled until program exit. ctrl-c to restore.`)
