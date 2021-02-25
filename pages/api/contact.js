require("dotenv").config();
const nodemailer = require("nodemailer");

export default (req, res) => {
  const { name, email, text, type } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOption = {
    from: `${process.env.EMAIL}`,
    to: `${process.env.EMAIL}`,
    subject: `${
      type === "Home"
        ? `Contact opnemen met ${email}`
        : "Nieuwe contact aanvraag"
    }`,
    text: `${
      type === "Home"
        ? `
    Op de homepagina is een nieuwe submit gekomen van ${email}. We moeten dus contact met hem opnemen. ${
            text != ""
              ? `Hij/zij heeft een telefoonnummer achtergelaten: ${text}`
              : "Diegene heeft geen telefoonnummer achtergelaten."
          }
    `
        : `Er is een nieuwe contact aanvraag binnengekomen. 
        Naam: ${name}
        Email: ${email}

        Bericht:
        ${text}
        `
    }`,
  };

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log(err);
      res.send("error" + JSON.stringify(err));
    } else {
      res.send("success");
    }
  });

  res.send("success");
};
