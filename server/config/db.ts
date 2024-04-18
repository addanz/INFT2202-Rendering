let LOCAL = false;
let HostName, URI;
if(LOCAL){
    URI = "mongodb://localhost/contacts";
    HostName = "localhost";
}else{
    URI =
        "mongodb+srv://addanzahra2:TvcWdGrHtQxti2U2@cluster0.lixvdkh.mongodb.net/";
    HostName = "MongoDB Atlas";
}

export{URI, HostName};
export const SessionSecret = "INFT2202SessionSecret";



