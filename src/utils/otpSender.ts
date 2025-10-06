import axios from 'axios';

export async function sendOTP(mobile: any, otp: any, country_code: any) {
  const url = `https://api.authkey.io/request?authkey=7dc1c771263a4e70&mobile=${mobile}&country_code=${country_code}&sid=12564&company=techsetup&otp=${otp}`;
  return await axios.get(url);
}