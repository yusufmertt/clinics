const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

async function handler(req, res) {
  const body = req.body;

  let name;

  if (body.name.trim() === "") {
    name = "User";
  } else {
    name = body.name;
  }

  // add validation ()

  const feedbackData = {
    to: body.email,
    from: "info@findclinicsturkey.com",
    subject: "Your reservation request has been received!",
    text: `Dear ${name}, \r\n Your reservation has been sent to the clinic and they will get in touch with you. If you want, you can directly email to reservation@findclinicsturkey.com and we will make your reservation. Thank you for your patience.`,
  };

  mail
  .send(feedbackData)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
  res.status(200).json({ message: "Email sent!" });
}

export default handler;
