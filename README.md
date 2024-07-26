# Setting Up WiFi Printer

## Step 1: Download the Code

- Download the code from the provided link: [DOWNLOAD](https://github.com/Everest-Technologies-Nepal/printer-api/archive/refs/heads/main.zip)

## Step 2: Install Node.js

- Go to: [Node.js official website](https://nodejs.org/)
- Download the LTS version for Windows.
- Run the installer and follow the instructions to complete the installation.

## Step 3: Set Up and Run the Server on Startup

1. Open the terminal:
   - Navigate to the folder where you downloaded the code in Step 1.
   - Run the following commands one by one:

     ```bash
     npm install pm2 -g
     npm install pm2-windows-startup -g
     pm2-startup install
     pm2 start ecosystem.config.js
     ```

## Step 4: Start ngrok

- Open the terminal and run the following command to start ngrok:

  ```bash
  ngrok http 3003 --domain=proven-magical-goldfish.ngrok-free.app --log=stdout > ngrok.log &
