require("dotenv").config();
const nodemailer = require("nodemailer");
const nodemailerSendgrid = require("nodemailer-sendgrid");

export default (req, res) => {
  const { name, email, text, type } = req.body;

  const transport = nodemailer.createTransport(
    nodemailerSendgrid({
      apiKey: process.env.SENDGRID_API_KEY,
    })
  );

  transport
    .sendMail({
      from: "contact@byte24.nl",
      to: "info@byte24.nl",
      subject: `${
        type === "Home"
          ? `Contact opnemen met ${email}`
          : `Nieuwe contact aanvraag van ${name}`
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
    })
    .then(() => {
      console.log(
        "Message delivered with code %s %s",
        res.statusCode,
        res.statusMessage
      );
      res.send("success");
    })
    .catch((err) => {
      console.log("Errors occurred, failed to deliver message");

      if (err.response && err.response.body && err.response.body.errors) {
        err.response.body.errors.forEach((error) =>
          console.log("%s: %s", error.field, error.message)
        );
      } else {
        console.log(err);
      }
    });
};
