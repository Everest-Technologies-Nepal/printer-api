const {exec} = require('child_process')

const ngrokCommand =
  'ngrok http 3003 --domain=proven-magical-goldfish.ngrok-free.app'

exec(ngrokCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`)
    return
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`)
    return
  }
  console.log(`stdout: ${stdout}`)
})
