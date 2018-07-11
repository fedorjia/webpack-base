import "./style.css";
import _ from "lodash";

const obj = 'fedorjia';

if (process.env.NODE_ENV === "development") {
    console.log("We are in development mode!");
    console.log(...obj);
}

document.querySelector(".app").innerHTML = _.join(["Hello", "webpack!"], " ");
