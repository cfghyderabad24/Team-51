const exp=require('express')
const mailApp=exp.Router()
const expressAsyncHandler=require('express-async-handler')
require('dotenv').config()
const nodemailer = require('nodemailer');
//const verifyToken=require('../Middlewares/verifyToken')

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
})
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});


const sendEmail = async (name, email, discountAmount) => {

  
    await transporter.sendMail({
      from: "<your email address>",
      to: email,
      subject: "Submission was successful",
      html:` <!DOCTYPE html>
        <html>
        <head>
            <style>
                .header, .footer {
                    text-align: center;
                    padding: 10px;
                    background-color: #f2f2f2;
                }
                .content {
                    padding: 20px;
                    font-family: Arial, sans-serif;
                    text-align: center;
                }
                .logo {
                    height: 50px;
                }
                .footer-logo {
                    height: 30px;
                }
                .discount {
                    font-size: 24px;
                    color: #ff0000;
                    margin: 20px 0;
                }
                .discount-code {
                    font-size: 20px;
                    font-weight: bold;
                }
                .btn {
                    display: inline-block;
                    padding: 10px 20px;
                    font-size: 16px;
                    font-weight: bold;
                    color: #fff;
                    background-color: #28a745;
                    text-decoration: none;
                    border-radius: 5px;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="header">
                <img src="https://www.nextskills360.in/wp-content/uploads/2022/04/Coding-Toy1.png" class="logo" alt="Company Logo">
            </div>
            <div class="content">
                <p>Dear ${name},</p>
                <p>We are excited to offer you an exclusive discount of ${discountAmount}% on your next purchase!</p>
                <p class="discount">Use the code below at checkout to avail your discount:</p>
                <p class="discount-code">ABC</p>
                <a href="https://yourwebsite.com" class="btn">Shop Now</a>
                <p>Don't miss out on this limited-time offer. Shop now and save big!</p>
                <p>Best regards,<br>The Your Company Team</p>
            </div>
            <div class="footer">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
                <p>Contact us: <a href="mailto:support@yourcompany.com">support@yourcompany.com</a></p>
            </div>
        </body>
        </html>
`,
    });
  };

mailApp.post('/discount/:productId',expressAsyncHandler(async(req,res)=>{
    const productId=(+req.params.productId)
    const user=req.body
    sendEmail(user.name,user.email,user.discountAmount)
    res.send("Email sent")

}))

module.exports=mailApp