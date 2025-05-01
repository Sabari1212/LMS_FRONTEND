


function Stroageusername(username){
    localStorage.setItem("username", username);
}
function Getlocalstorageusername(){
    return localStorage.getItem("username");
}
function StroageTockin(tockin){
    localStorage.setItem("tocken", tockin);
}

function Getlocalstorage(){
    return localStorage.getItem("tocken");
}
function Deletelocalstorage(){
        localStorage.removeItem("tocken");
}

export{StroageTockin,Getlocalstorage,Deletelocalstorage,Stroageusername,Getlocalstorageusername}