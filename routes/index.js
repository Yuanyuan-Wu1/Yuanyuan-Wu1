const path = require("path");
const nodemailer = require("nodemailer");
const router = require("express").Router();
require("dotenv").config();

router.get("/contact", function (req, res) { 
    res.sendFile(path.join(__dirname, "../public/contact.html"));
});

router.post("/send", function (req, res) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    var mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: `!! PROFILE MESSAGE - ${req.body.name}`,
        text: `
            Name: ${req.body.name}
            Email: ${req.body.email}
            
            ${req.body.message}
        `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.json(error)
        } else {
            console.log('Email sent: ' + info.response);
            res.json('Email sent: ' + info.response);
        }
    });
});

// Basic route that sends the user first to the AJAX Page
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html")); // need __dirname for sendFile
});

module.exports = router;