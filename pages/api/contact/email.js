import { connectToDatabase } from "../../../lib/db";

const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

async function handler(req, res) {
  // add validation ()

  const body = req.body;

  const {
    name,
    email,
    phone,
    treatment,
    note,
    clinic,
    topic,
    type,
    preferredClinic,
  } = body;

  if (!email && !phone && email.trim() === "" && phone.trim() === "") {
    return;
  }

  console.log(body);

  /*   const client = await connectToDatabase();
  const contactsCollection = client.db().collection("contacts");

  const dbResult = await contactsCollection.insertOne(body);

  client.close();
 */

  let message;
  let subject;

  if (type === "consultation") {
    message = `Name:${name}  \r\n Email:${email}\r\n Treatment:${treatment} \r\n Message:${note} \r\n Phone:${phone}\r\n Preferred Clinic:${preferredClinic}`;
    subject = "New consultation request!";
  } else if (type === "contact") {
    message = `Name:${name}  \r\n Email:${email}\r\n Topic:${topic} \r\n Message:${note} \r\n Phone:${phone}\r\n `;
    subject = "New contact request!";
  } else if (type === "reservation") {
    message = `Name:${name}  \r\n Email:${email}\r\n Clinic:${clinic} \r\n Message:${note} \r\n Phone:${phone}\r\n Treatment:${treatment}\r\n `;
    subject = "New reservation request!";
  }

  /*  else {
    message = `Name:${name} \r\n Email:${email} \r\n Phone:${phone}`;
    subject = "New contact request!";
  } */

  const data = {
    to: "ymert60@hotmail.com",
    from: "contact@findclinicsturkey.com",
    subject: subject,
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail
    .send(data)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    }); // mail.send(feedbackData);

  res.status(200).json({ message: "Email sent!" });
}

export default handler;
