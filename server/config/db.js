"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionSecret = exports.HostName = exports.URI = void 0;
let LOCAL = false;
let HostName, URI;
if (LOCAL) {
    exports.URI = URI = "mongodb://localhost/contacts";
    exports.HostName = HostName = "localhost";
}
else {
    exports.URI = URI =
        "mongodb+srv://addanzahra2:TvcWdGrHtQxti2U2@cluster0.lixvdkh.mongodb.net/";
    exports.HostName = HostName = "MongoDB Atlas";
}
exports.SessionSecret = "INFT2202SessionSecret";
//# sourceMappingURL=db.js.map