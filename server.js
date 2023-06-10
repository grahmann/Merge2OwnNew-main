const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phone = req.body.phone;
  const occupation = req.body.occupation;
  const currentLocation = req.body.currentLocation;
  const coCreationSession = req.body.coCreationSession;

  const mail = {
    from: `${firstName} ${lastName}`,
    to: "your-email@gmail.com",
    subject: "Contact Form Submission - Merge2Own",
    html: `
      <p>Name: ${firstName} ${lastName}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Occupation: ${occupation}</p>
      <p>Current Location: ${currentLocation}</p>
      <p>Co-Creation Session Interest: ${coCreationSession}</p>
    `
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log(error);
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
