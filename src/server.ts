import "dotenv/config"

import express from "express"
import Twilio from "twilio"

const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN

const client = Twilio(accountSid, authToken)

const app = express()

app.use(express.json())

app.post("/whatsapp", (req, res) => {
  const { message } = req.body

  client.messages.create({
    from: "whatsapp:+14155238886",
    body: message,
    to: "whatsapp:+551635094670"
  }).then(message => {
    console.log(message.sid)
    res.send("Message sent")
  }).catch(error => console.log(error))


})

app.listen(5000, () => {
  console.log("Server is running")
})

export default app