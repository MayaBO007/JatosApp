
// ****************************************************************************************
//  Listen to Orientation changes and handle them accordingly
// ----------------------------------------------------------------------------------------
// initialize variables:
var screenOrientationEvents = [];
var screenInitialOrientation = checkInitialOrientation();

// check upon entry if it is on portrait mode:

let checkOrientation = async function () {
    let isDone = await startInstructions();
    if (isDone == "done") {
        function checkInitialOrientation() {
            if (screen.availWidth < screen.availHeight) {
                showOnlyLandscapeMessage()
                return 'landscape'
            } else {
                return 'portrait'
            }
        }
    }
}

checkOrientation();

window.addEventListener("orientationchange", function (event) {
    // if ortation is changed from the main portrait mode
    if (window.orientation) { // originally I used this: event.target.screen.orientation.angle - but this does not work on iphones
        showOnlyLandscapeMessage()
    } else { // device rotated back to the main portrait mode
        removeOnlyLandscapeMessage()
    }
    // record data:
    screenOrientationEvents.push({
        orientationAngle: window.orientation,
        orientationTime: new Date(),
        OrientationTimeStamp: event.timeStamp,
    });
});
// function showOnlyLandscapeMessage() {
//     // get current html to determine relevant id for orientation switches
//     if (logic.isCalledFromInstructions()) {
//         var element_ID_to_Hide = settings.instructions_main_HTML_element;
//     } else if (document.location.href.includes(settings.instructionsFileName)) { // if it is called from inside the iframe don't run it (unecessary)
//         return
//     } else if (!logic.isCalledFromInstructions()) {
//         var element_ID_to_Hide = settings.App_main_HTML_element; // The commented parts around were relevant when instructions where not in an iframe
//     }
// hide screen and show message:
dom_helper.hide(element_ID_to_Hide)
document.body.style.backgroundImage = 'none'
if (!document.getElementById("support_only_landscape_msg")) { // if the message element has not been formed already
    // set the text message:
    supportOnlyLandscapeMessageElement = document.createElement('h2');
    supportOnlyLandscapeMessageElement.setAttribute("id", 'support_only_portrait_msg')
    supportOnlyLandscapeMessageElement.classList.add('centered')
    supportOnlyLandscapeMessageElement.classList.add('error_message')
    supportOnlyLandscapeMessageElement.appendChild(document.createTextNode("האפליקציה עובדת רק במצב מאוזן."))
    supportOnlyLandscapeMessageElement.appendChild(document.createElement("br"))
    supportOnlyLandscapeMessageElement.appendChild(document.createElement("br"))
    supportOnlyLandscapeMessageElement.appendChild(document.createTextNode("סובב/י את המכשיר בבקשה."))
    // set the text box:
    supportOnlyLandscapeBoxElement = document.createElement('div');
    supportOnlyLandscapeBoxElement.setAttribute("id", "support_only_portrait_box");
    supportOnlyLandscapeBoxElement.setAttribute("class", "error_message_screen");

    // append stuff:
    supportOnlyLandscapeBoxElement.appendChild(supportOnlyLandscapeMessageElement);
    document.body.appendChild(supportOnlyLandscapeBoxElement)
} else {
    dom_helper.show('support_only_landscape_box')
}
}
function removeOnlyLandscapeMessage() {
    // get current html to determine relevant id for orientation switches
    if (logic.isCalledFromInstructions()) {
        var element_ID_to_Hide = settings.instructions_main_HTML_element;
    } else if (document.location.href.includes(settings.instructionsFileName)) { // if it is called from inside the iframe don't run it (unecessary)
        return
    } else if (!logic.isCalledFromInstructions()) {
        var element_ID_to_Hide = settings.App_main_HTML_element; // The commented parts around were relevant when instructions where not in an iframe
    }
    // remove message and show screen:
    dom_helper.show(element_ID_to_Hide)
    document.body.style.backgroundImage = ''
    dom_helper.hide('support_only_landscape_box')
}