import "dotenv/config"

import qrcode from "qrcode-terminal"
import { Buttons, Client, LocalAuth, Message } from "whatsapp-web.js"

const client = new Client(
  {
    authStrategy: new LocalAuth({ clientId: "" })
  }
)

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true })
})



client.on("message", async (message) => {
  if (message.from === "5516997445382@c.us" || message.from === "5516996300306@c.us") {

  }
})

client.on("ready", async () => {
  console.log("Client is ready")
})

client.initialize()
