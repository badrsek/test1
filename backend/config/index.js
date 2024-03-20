
require("dotenv").config();

export default {
  Server: {
    port: process.env.PORT || 9090,
    webUrl: "https://test1-1-95zm.onrender.com",
  },
  Database: {
    url: "mongodb+srv://badersekrafi:Rabbiallah12@cluster0.0mvuko8.mongodb.net/",
    db: "bader"
  },
  Jwt: {
    secretKey: "ebe94779fe1f5865fbc0dc24fe13a835dd81193d3edeca2deb4eb6b3459941f51d8e40a8f724dcfa1f61776b1f96994de39eae02b0f239fa0c613c59c6e1e6f203f6ed891138caafbf12fe61933996e81ce3d874b85f6e4eb988980d22196ded1edc01cddf945d68be3b5c5de0d47b1c6d1f51999aa344356bbdc09df9352e77eaa4247642a612a24ca399fc5f637eec0a158970257bf684711b50a387bb452d22bcdb63e05a8cd1f92fc9b744f1ade051fe5793a7fce811971749bf63bee1b075a2c44cab6861eabfe34b7527f684ff1a40f27713ee6cdbf129972fcd0e5ec953662085194d6e9948b9bf8fa255d2995d2e626a82e3f2d3ebd854c01a1575ea",
  },
  Razorpay: {
    key_id: "rzp_test_RSxsDZEdr2cVna",
    key_secret: "WMIGHMyj0QjlhSYMpqcvgwQK",
  },
  GoogleSMTP: {
    host: "smtp.gmail.com",
    port: 465,
    user: "badersekrafi@gmail.com",
    pass: "zgpkgbkhevtrxqit",
  },
};
