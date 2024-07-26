#!/bin/bash
ngrok http 3003 --domain=proven-magical-goldfish.ngrok-free.app --log=stdout > ngrok.log &
pm2 save
pm2 stop script-runners

