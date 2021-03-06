const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Please fill all the feilds" });
  }

    let smtpTransporter = nodemailer.createTransport({
      service: "Gmail",
      mailhost: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "codex99.solutions@gmail.com",
        pass: "codeX99#S",
      },
    });
    let mailOptions = {
      from: data.email,
      to: "codex99.solutions@gmail.com",
      subject: `message from ${data.name}`,
      html: `

            <h3>Informations<h3/>
            <ul>
            <li>Name: ${data.name}<li/>
            <li>Email: ${data.email}<li/>
            </ul>
            <h3>Message</h3>
            <p>${data.message}<p/>
            `,
    };

    smtpTransporter.sendMail(mailOptions, (error) => {
        try {
          if (error)
            return res.status(400).json({ msg: "Please Fill All The Fields!", error:error});
          res.status(200).json({ msg: "Thank You For Contacting CodeX_99." });
        } catch (error) {
          if (error) return res.status(500).json({ msg: "There is server error" });
        }
    });
});
module.exports = router;