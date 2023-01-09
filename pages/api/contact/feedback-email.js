//import { language } from "gray-matter";

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

  const text_languages = {
    Arabic: "تم استلام طلبك لدينا وسنعود اليك في أقرب وقت ممكن.",
    Hebrew: "הבקשה שלך לנו התקבלה ונחזור אליך בהקדם האפשרי.",
    Russian:
      "Ваш запрос нам был получен и мы свяжемся с вами как можно скорее.",
    French:
      "Votre demande à nous a été reçue et nous vous recontacterons dès que possible.",
    Spanish:
      "Su solicitud a nosotros ha sido recibida y nos pondremos en contacto con usted lo antes posible.",
    Italian:
      "La tua richiesta a noi è stata ricevuta e ti risponderemo il prima possibile.",
    English:
      "Your request to us has been received and we will get back to you as soon as possible.",
    German:
      "Ihre Anfrage an uns wurde erhalten und wir werden uns so bald wie möglich bei Ihnen melden.",
  };

  const subject_languages = {
    Arabic: "تم استلام طلبك!",
    Hebrew: "הבקשה שלך התקבלה!",
    Russian: "Ваш запрос был получен!",
    French: "Votre demande a été reçue!",
    Spanish: "¡Su solicitud ha sido recibida!",
    Italian: "La tua richiesta è stata ricevuta!",
    English: "Your request has been received!",
    German: "Ihre Anfrage wurde erhalten!",
  };

  let subject = "Your request has been received!";
  let text =
    "Your request to us has been received and we will get back to you as soon as possible.";

  if (body.language) {
    subject = subject_languages[body.language];
    text = text_languages[body.language];
  }

  const feedbackData = {
    to: body.email,
    from: "info@findclinicsturkey.com",
    subject: subject,
    text: text,
  };

  mail
    .send(feedbackData)
    .then(() => {})
    .catch((error) => {});

  res.status(200).json({ message: "Email sent!" });
}

export default handler;
