// <=================== Automated Functions ===================>
function sleepInExecution(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// <================= Main Execution ==========================>
const allCustomizedElements = document.querySelectorAll('.customized');

allCustomizedElements.forEach((element) => {
    console.log('found customized element');
});