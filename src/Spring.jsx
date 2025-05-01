

import axios from "axios";
var url = "http://localhost:9090/Login";

function Loginbk(auth) {
    return axios.post(url + "/public/Login", auth);
}
function Sendotp(email,register) {
    return axios.post(url + "/send_Otp?email=" + email+"&purpose="+register);
}
function Register(Alldata) {
    return axios.post(url + "/public/register" , Alldata);
}
function Verify_OTP(otp) {
    return axios.post(url + "/verify_OTP?otp=" + otp);
}

export { Loginbk, Sendotp ,Register,Verify_OTP}
// http://localhost:8080/Login/verify_OTP?otp=347946