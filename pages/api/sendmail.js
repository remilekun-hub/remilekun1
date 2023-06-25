import { Resend } from "resend";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function validateEmail(email) {
  // eslint-disable-next-line
  let validEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return validEmail.test(email);
}

export default async function handler(req, res) {
  const resend = new Resend(process.env.RESEND_KEY);
  const { name, email, message } = req.body;

  if (req.method != "POST") {
    return res.status(405).json({ msg: "Bad request method" });
  }

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ msg: "name, email and message are required" });
  }
  const isEmailValid = validateEmail(email);
  if (!isEmailValid) {
    return res.status(400).json({ msg: ` ${email} is not a valid email` });
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "atandaremilekun@gmail.com",
      subject: "Enquiry from my portolio website",
      html: `<p>${message} <br/>
      Name: ${name} <br />
      Email:  ${email}
      </p>`,
    });
    res.status(201).json({ msg: "Mail sent" });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong... Mail not sent" });
  }
}
