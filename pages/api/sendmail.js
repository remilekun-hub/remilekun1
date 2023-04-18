// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require("nodemailer");
export default async function handler(req, res) {
  // const transporter = nodemailer.createTransport({})
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "renodremson@gmail.com",
      pass: "alaga100",
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });

  const mailoptions = {
    from: "renodremson@gmail.com",
    to: "atandaremilekun@gmail.com",
    subject: `message from my portfolio website from ${name} and email: ${email}`,
    text: message,
  };

  transporter.sendMail(mailoptions, (err, data) => {
    if (err) {
      return res.status(500).json({ status: "failed" });
    }
    console.log("success");
    res.status(200).json({ status: "success" });
  });
}
