import axios from "axios";
var url = "http://localhost:9090/api";


function PostAllcourse(formData){
    return (
        axios
        .post("http://localhost:9090/api/public/postCoruse_data", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((response) => {
            console.log("Product added successfully:", response.data);
            alert("Product added successfully");
        })
        .catch((error) => {
            console.error("Error adding product:", error);
            alert("Error adding product");
        })

    )
    // axios.post(url+"/public/postCoruse_data")
}
function GetAllcourse() { 
    return axios.get(url + "/public/getCoruse_data");
}
function Getuser1(token) { //exem
    return  axios.get("http://localhost:9090/api/user/get", {headers: { Authorization: `Bearer ${token}`},});
}
function Getuser2(token) { //exem
    return axios.get("http://localhost:9090/api/user2/get", {headers: { Authorization: `Bearer ${token}`},});
    
}
function Getvideodata(token_and_videoname) { 
    return axios.get(url+`/user/getvideodata/${token_and_videoname.Core_name}`, {headers: { Authorization: `Bearer ${token_and_videoname.tocken}`},});
    
}

function Getpayonedata(idemail) { 
    console.log(idemail.tocken)
    return axios.get(url+`/user/oneidandemail?id=${idemail.id}&email=${idemail.email}`, {headers: { Authorization: `Bearer ${idemail.tocken}`},});
   
}
function Updated_prograp(data_to) { 
    return axios.put(url+`/public/updatedata_paragarse?email=${data_to.email}&courseId=${data_to.courseId}&completedVideoIds=${data_to.completedVideoIds}`);
}
function GetpayonedataListofdata(idemail) { 
    console.log(idemail.tocken)
    return axios.get(url+`/user/oneidandemail_List?email=${idemail.email}`, {headers: { Authorization:` Bearer ${idemail.tocken}`},});
   
}

// http://localhost:9090/api/user/updatedata_paragarse?email=prosbari6%40gmail.com&courseId=1&completedVideoIds=1
function Getonevideo() { 
    
    return url
    

    //axios.get(`http://localhost:8080/api/user/Getvideo_data?parentFolderName=${videonedata.prefoldname}&childFolderName=${videonedata.chalfoldname}&url=${videonedata.url}` , {headers: { Authorization: `Bearer ${videonedata.Tocken}`},});
}//http://localhost:8080/api/public/Getvideo_data?parentFolderName=${prefoldname}&childFolderName=${chalfoldname}&url=${url}
//http://localhost:8080/api/public/Getvideo_data?parentFolderName=HTML&childFolderName=html2&url=HTML_6-HTML-Lists.mp4

export {GetAllcourse,PostAllcourse,Getuser1,Getuser2,Getvideodata,Getonevideo,Getpayonedata,Updated_prograp,GetpayonedataListofdata};
