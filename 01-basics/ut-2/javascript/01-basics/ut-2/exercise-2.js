const ALERT_MESSAGE = "This is an alert message, click me to move on!!!";
const CONFIRM_MESSAGE= "Show me in an alert if you clicked true on ok or false";
const ALERT_TRUE = "You clicked on true click me to move on!!!";
const ALERT_FALSE = "You clicked on false click me to move on!!!";
const PROMP_MESSAGE = "Show me in an alert the message typed";
const ALERT_ULTIMO = ("Click me to move on!!!");
alert(ALERT_MESSAGE);
let confirm = window.confirm(CONFIRM_MESSAGE);
if (confirm === true) {
    alert(ALERT_TRUE)
} else {
    alert(ALERT_FALSE)
}
let resultado =prompt(PROMP_MESSAGE);
if (resultado !== null) {
    alert(ALERT_ULTIMO)
} 