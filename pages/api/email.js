import { connectToDatabase } from "../../lib/db";

const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

async function handler(req, res) {
  const body = req.body;
  
  const client = await connectToDatabase()
  const contactsCollection = client.db().collection("contacts")

  const result = await contactsCollection.insertOne(body)

 client.close()

  // add validation ()

  let message;
  let subject;

  if (body.message) {
    message = `Name:${body.name}  \r\n Email:${body.email}\r\n Topic:${body.topic} \r\n Message:${body.message}`;
    subject = "New web form message!";
  } else {
    message = `Name:${body.name} \r\n Email:${body.email}`;
    subject = "New contact request!";
  }

  const data = {
    to: "ymert60@hotmail.com",
    from: "demo@ymcakmak.com",
    subject: subject,
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

/*   const feedbackData = {
    to: body.email,
    from: "demo@ymcakmak.com",
    subject: "Your request has been received!",
    text: `Dear ${body.name}, \r\n Your request to us has been received and we will get back to you as soon as possible. Thank you for your patience.`,
  }; */

  mail.send(data);
 // mail.send(feedbackData);


  res.status(200).json({ name: "John Doe" });
}

export default handler;
