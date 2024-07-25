// run_scripts.js
const {exec} = require('child_process')

// Run the VBS file first
// exec(
//   'cscript //B //Nologo D:\\printer-api\\run_ngrok_silently.vbs',
//   (error, stdout, stderr) => {
//     if (error) {
//       console.error(`exec error (VBS): ${error}`)
//       return
//     }
//     console.log(`stdout (VBS): ${stdout}`)
//     console.error(`stderr (VBS): ${stderr}`)

//     // Once the VBS file has finished, run the BAT file
//     exec('D:\\printer-api\\start-ngrok.bat', (error, stdout, stderr) => {
//       if (error) {
//         console.error(`exec error (BAT): ${error}`)
//         return
//       }
//       console.log(`stdout (BAT): ${stdout}`)
//       console.error(`stderr (BAT): ${stderr}`)
//     })
//   }
// )

exec('D:\\printer-api\\start-ngrok.bat', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error (BAT): ${error}`)
    return
  }
  console.log(`stdout (BAT): ${stdout}`)
  console.error(`stderr (BAT): ${stderr}`)
})
