require("dotenv").config();
const nodemailer = require("nodemailer");
const nodemailerSendgrid = require("nodemailer-sendgrid");

export default (req, res) => {
  const { name, email, text, telefoon, budget, type } = req.body;

  const transport = nodemailer.createTransport(
    nodemailerSendgrid({
      apiKey: process.env.SENDGRID_API_KEY,
    })
  );

  const mailOptions = {
    from: "contact@byte24.nl",
    to: "info@byte24.nl",
    subject: `Nieuwe ${
      type === "appsite" ? "app en/of website" : "design"
    } offerte aanvraag`,
    text: `
        Naam: ${name}
        Email: ${email}
        Budget: ${budget}
        Telefoon: ${telefoon}
        Bericht:
        ${text}
        
        `,
  };

  const mailOptions2 = {
    from: "contact@byte24.nl",
    to: email,
    subject: `Bedankt voor je offerte aanvraag!`,
    html: `  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
    <tr>
      <td bgcolor="#ffffff">
        <div align="center" style="padding: 0px 15px 0px 15px;">
          <table border="0" cellpadding="0" cellspacing="0" width="500" class="wrapper">
            <!-- LOGO/PREHEADER TEXT -->
            <tr>
              <td style="padding: 20px 0px 30px 0px;" class="logo">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td bgcolor="#ffffff" width="100" align="left"><a href="www.byte24.nl" target="_blank"><img alt="Logo" src="https://byte24.nl/_next/static/images/logo1-a2a4ca110946359f6e371984edb0f273.png" width="52" style="display: block; font-family: Helvetica, Arial, sans-serif; color: #666666; font-size: 16px;" border="0"></a></td>
                    <td bgcolor="#ffffff" width="400" align="right" class="mobile-hide">
                      <table border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="right" style="padding: 0 0 5px 0; font-size: 14px; font-family: Arial, sans-serif; color: #666666; text-decoration: none;"><span style="color: #666666; text-decoration: none;">BYTE24 - Jouw eindbestemming voor een website, app of design.</span></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </td>
    </tr>
  </table>

  <!-- ONE COLUMN SECTION -->
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
    <tr>
      <td bgcolor="#ffffff" align="center" style="padding: 70px 15px 70px 15px;" class="section-padding">
        <table border="0" cellpadding="0" cellspacing="0" width="500" class="responsive-table">
          <tr>
            <td>
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <!-- HERO IMAGE -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tbody>
                        <tr>
                          <td class="padding-copy">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td>
                                  <a  target="_blank"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/48935/responsive-email.jpg" width="500" height="200" border="0" alt="bytepic" style="display: block; padding: 0; color: #666666; text-decoration: none; font-family: Helvetica, arial, sans-serif; font-size: 16px; width: 500px; height: 200px;" class="img-max"></a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <!-- COPY -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="font-size: 25px; font-family: Helvetica, Arial, sans-serif; color: #333333; padding-top: 30px;" class="padding-copy">Bedankt voor je offerte aanvraag!</td>
                      </tr>
                      <tr>
                        <td align="center" style="padding: 20px 0 0 0; font-size: 16px; line-height: 25px; font-family: Helvetica, Arial, sans-serif; color: #666666;" class="padding-copy">Bedankt voor je interesse in onze services. We zullen zo snel mogelijk contact met je opnemen.</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <!-- BULLETPROOF BUTTON -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mobile-button-container">
                      <tr>
                        <td align="center" style="padding: 25px 0 0 0;" class="padding-copy">
                          <table border="0" cellspacing="0" cellpadding="0" class="responsive-table">
                          
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
`,
  };

  Promise.all([
    transport.sendMail(mailOptions),
    transport.sendMail(mailOptions2),
  ])
    .then(() => res.send("success"))
    .catch((err) => {
      if (err.response && err.response.body && err.response.body.errors) {
        err.response.body.errors.forEach((error) =>
          console.log("%s: %s", error.field, error.message)
        );
      } else {
        console.log(err);
      }
    });
};
