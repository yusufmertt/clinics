import { connectToDatabase } from "../../lib/db";

const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

async function handler(req, res) {
  const body = req.body;

  const client = await connectToDatabase();
  const contactsCollection = client.db().collection("contacts");

  const result = await contactsCollection.insertOne(body);

  client.close();

  // add validation ()

  let message;
  let subject;

  message = `Müşteri Adı:${body.name}  \r\n Müşteri Email:${body.email}\r\n  Mesaj:${body.message} \r\n Müşteri Tel:${body.phone} \r\n  Bu müşteri size FindClinicsTurkey.com tarfından yönlendirilmiştir. Kod:KSN51K`;
  subject = `Yeni rezervasyon isteği! Klinik:${body.clinic}`;

  const data = {
    to: "ymert60@hotmail.com" ,//body.clinicEmail,
    from: "reservation@findclinicsturkey.com",
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
  });
  const feedbackToMeData = {
    to: "phudinq@findclinicsturkey.com",
    from: "reservation@findclinicsturkey.com",
    subject: subject,
    text: message,
    html: message.replace(/\r\n/g, "<br>"),

  }

  res.status(200).json({ message: "Email sent!" });
}

export default handler;
