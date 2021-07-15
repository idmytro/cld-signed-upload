require('dotenv').config()
const cloudinary = require('cloudinary').v2
//const apiSecret = cloudinary.config().api_secret

const signuploadform = () => {
  const timestamp = Math.round((new Date).getTime()/1000);

  const signature = cloudinary.utils.api_sign_request({
    timestamp: timestamp,
    eager: 'c_pad,h_300,w_400|c_crop,h_200,w_260',
    folder: 'signed_upload_demo_form'}, apiSecret);

  return { timestamp, signature }
}

module.exports = {
  signuploadform
}
