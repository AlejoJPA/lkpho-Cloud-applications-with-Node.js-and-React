 // Export a function named 'getDate' from the module
module.exports.getDate = function getDate() {
    // Get the current date and time in the timezone "Australia/Brisbane"
    //let aestTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"}); //"en-US" USA forman , en: Enlish, date: AM and PM

    // Get the current date and time in the timezone "Europe/Berlin"
    let frankfurtTime = new Date().toLocaleString("de-DE", {timeZone: "Europe/Berlin" }); // German format: "de-DE"
    //return frankfurtTime;
    //console.log(`Frankfurt time: ${frankfurtTime}`); 
    //return aestTime; // Return the formatted date and time

    /*NOTE: Wen used by 'index-with-require' the return of today must be the plain function without asigment operation. 
    The variable frankfurtTime can be canceled as it has not impact */
    return new Date() // does not work: Date().toLocaleString("de-DE", {timeZone: "Europe/Berlin" }); 

};
