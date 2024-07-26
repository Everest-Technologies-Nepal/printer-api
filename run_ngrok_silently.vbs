Set WshShell = CreateObject("WScript.Shell")
WshShell.Run "bash -c 'D:/printer-api/start-ngrok.sh'", 0, False
