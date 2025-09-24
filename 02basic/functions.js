"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AddTwo(num) {
    return num + 2;
}
AddTwo(5);
function ToUpper(val) {
    return val.toUpperCase();
}
ToUpper("Aaryan");
function UserData(name, email, ispaid) {
    if (ispaid === void 0) { ispaid = false; }
}
UserData("Aryan", "a@g");
UserData("Aryan", "a@g", true);
