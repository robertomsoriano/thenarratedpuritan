import nodemailer from 'nodemailer'

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: `${process.env.EMAIL}`,
    pass: `${process.env.EMAIL_PASS}`
  }
});
function tnpSub(event) {
  transporter.sendMail(
    {
      from: process.env.EMAIL,
      to: [`${process.env.SUBS_EMAIL}`],
      subject: `Contact from thenarratedpuritan.com`,
      html: `<p>${event.user.name}.<br/>
                        ${event.user.email}.<br/>
                        ${event.user.phone_number}.<br/>
                        ${event.user.msg_subject}.<br/>
                        ${event.user.msg}.<br/>
                    </p>`
    },
    function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    }
  );
}

export default function handler(req, res) {
  if (req.method === 'POST' && req.body.pass === process.env.TEMP_POST_PASS) {
    let event = {
      user: req.body.user
    }
    tnpSub(event)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ name: `Thanks` }))
    // .catch(err => {
    //     res.statusCode = 400
    //     res.setHeader('Content-Type', 'application/json')
    //     res.end(JSON.stringify({ name: `Error` }))
    // })
  } else {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ name: `Good try` }))
  }

}