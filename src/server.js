const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '../build')));

app.post('/api/contactForm', async (req, res) => {
  const { email, name, message } = req.body;
  if (!email || !name || !message) {
    throw new Error('Request not valid');
  }

  const { SMS_API_URL, SMS_KEY, SMS_USER, SMS_PASS, SMS_RECIPIENT } = process.env;

  const msg = `
    name:${name}<br />email:${email}<br />msg:${message}
  `;

  const result = await axios.post(SMS_API_URL, {
    key: SMS_KEY,
    user: SMS_USER,
    pass: SMS_PASS,
    sender: 'Portfolio',
    recipient: SMS_RECIPIENT,
    msg
  });

  if (result.data <= 0) {
    console.log(`Error send sms, code: ${result.data}. msg: ${msg}`);
    return res.send({ success: false });
  }

  res.send({ success: true });
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT);