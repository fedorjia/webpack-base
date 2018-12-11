import "./style.css";
import _ from "lodash";

// const obj = 'fedorjia';
const obj = {
    name: 'fedorjia'
}

if (process.env.NODE_ENV === "development") {
    console.log("We are in development mode!");
    const b = {
        ...obj
    };
    console.log(b)
}

document.querySelector(".app").innerHTML = _.join(["Hello", "webpack!"], " ");
