const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

function handler(req, res) {
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
    from: "demo@ymcakmak.com",
    subject: "Your request has been received!",
    text: `Dear ${name}, \r\n Your request to us has been received and we will get back to you as soon as possible. Thank you for your patience.`,
  };

  mail.send(feedbackData);

  res.status(200).json({ name: "John Doe" });
}

export default handler;
