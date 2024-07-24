const express = require('express')
const bodyParser = require('body-parser')
const ThermalPrinter = require('node-thermal-printer').printer
const Types = require('node-thermal-printer').types
const cors = require('cors') // Import cors

const app = express()
const port = 3003

app.use(cors()) // Use cors
app.use(bodyParser.json())

app.post('/print', async (req, res) => {
  const {printerIp, printerPort, message} = req.body

  if (!printerIp || !printerPort || !message) {
    return res
      .status(400)
      .json({error: 'Printer IP, port, and message are required'})
  }

  // Convert the message object to a string
  let messageString = ''
  for (let key in message) {
    if (message.hasOwnProperty(key)) {
      messageString += String.fromCharCode(message[key])
    }
  }

  let printer = new ThermalPrinter({
    type: Types.EPSON, // Replace with your printer type
    interface: `tcp://${printerIp}:${printerPort}`,
  })

  let isConnected = await printer.isPrinterConnected()
  if (!isConnected) {
    return res.status(500).json({error: 'Printer is not connected'})
  }

  printer.print(messageString)

  try {
    await printer.execute()
    res.status(200).json({message: 'Printed successfully'})
  } catch (error) {
    res.status(500).json({error: 'Failed to print', details: error.message})
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
