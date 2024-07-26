const express = require('express')
const {Socket} = require('net')
const cors = require('cors')
const {json} = require('body-parser')

const app = express()
const port = process.env.PORT || 3003

const corsOptions = {
  credentials: true,
  origin: '*',
}
app.use(cors(corsOptions))
app.use(json())

app.post('/api/print', async (req, res) => {
  const {ip, port, data} = req.body
  if (!ip || !port || !data) {
    return res
      .status(400)
      .json({success: false, message: 'Missing required fields'})
  }

  const byteArray = Uint8Array.from(Object.values(data))
  const client = new Socket()

  if (!client) {
    return res
      .status(500)
      .json({success: false, message: 'Error connecting to printer'})
  }

  client.connect(port, ip, () => {
    console.log('Connected to printer')

    client.write(byteArray, (err) => {
      if (err) {
        console.error('Error sending data:', err)
        return res
          .status(500)
          .json({success: false, message: 'Error sending data to printer'})
      }
      console.log('Message sent to printer')
      client.destroy() // close the connection
      res.json({success: true, message: 'Message sent to printer'})
    })
  })

  client.on('error', (err) => {
    console.error('Error connecting to printer:', err)
    res.status(500).json({
      success: false,
      message: 'Error connecting to printer',
      error: err.message,
    })
  })
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

module.exports = app
