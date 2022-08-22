const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

async function handler(req, res) {
  const body = req.body;

  let name;

  console.log(body.email)

  if (body.name.trim() === "") {
    name = "User";
  } else {
    name = body.name;
  }

  // add validation ()

  const feedbackData = {
    to: body.email,
    from: "contact@findclinicsturkey.com",
    subject:"Your consultation request has been received!",
    text: `Dear ${name},\r\n Your consultation request to us has been received and a doctor will get back to you as soon as possible. Thank you for your patience.`,
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
