
let inputText = prompt("Zəhmət olmasa, bir mətn daxil edin:");


function checkForNumbers(text) {

    let testNumbers = /\d/.test(text);

    if (testNumbers) {
        console.log("Mətndə rəqəm var.");
    } else {
        console.log("Mətn rəqəmlərdən ibarət deyil.");
    }
}
checkForNumbers(inputText);
