@echo off
ngrok http 3003 --domain=proven-magical-goldfish.ngrok-free.app --log=stdout > ngrok.log 2>&1
