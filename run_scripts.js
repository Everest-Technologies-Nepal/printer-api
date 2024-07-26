const {exec} = require('child_process')

exec(
  'cscript //B //Nologo D:\\printer-api\\run_ngrok_silently.vbs',
  (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error (VBS): ${error}`)
      return
    }
    console.log(`stdout (VBS): ${stdout}`)
    console.error(`stderr (VBS): ${stderr}`)
  }
)
