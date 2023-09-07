/*
* Ibrahim Hasaan 2023
* MIT License
*/

// For Moodle
try {
    if (window.location.href.indexOf('umass.moonami.com') != -1) {
        document.querySelectorAll("a[href='https://umass.moonami.com/login/index.php']")[0].click();
    }
} catch (error) {
    console.log("oops! there's an error logging into moodle", error);
}

// For Spire 
try {
    if (window.location.href.indexOf('umass.edu/spire/') != -1) {
        document.querySelectorAll("a[href='https://www.spire.umass.edu/psp/heproda/?cmd=login']")[0].click();
    }
} catch (error) {
    console.log("oops! there's an error logging into spire", error);
}

// For Canvas (1)
try {
    if (window.location.href.indexOf('umamherst.instructure') != -1) {
        document.querySelector("#global_nav_login_link").click();
    }
} catch (error) {
    console.log("oops! there's an error logging into canvas", error);
}

// For Canvas (UMass IT)
try {
    if (window.location.href.indexOf('www.umass.edu/it') != -1) {
        document.querySelectorAll("a[href='https://umamherst.instructure.com/login/saml']")[0].click();
    }
} catch (error) {
    console.log("oops! there's an error logging into canvas", error);
}

// For the Microsoft 'Enter Email Address' page
try {
    if (window.location.href.indexOf('login.microsoftonline.com') != -1 && document.querySelector("#i0116")
        && document.querySelector("#i0116").value.split('@').pop() === "umass.edu") {
        document.querySelector("#idSIButton9").click();
    }
} catch (error) {
    console.log("oops! logging into microsoft!", error);
}

// For the Microsoft 'Enter Password' page
try {
    if (window.location.href.indexOf('login.microsoftonline.com') != -1 && document.querySelector("#i0118")
        && document.querySelector("#i0118").value !== "") {
        document.querySelector("#idSIButton9").click();
    }
} catch (error) {
    console.log("oops! logging into microsoft!", error);
}

// For the Microsoft 'Stay Signed In' page
try {
    if (document.body.innerText.indexOf('Stay signed in?') !== -1) {
        document.querySelector("#KmsiCheckboxField").click(); // Useless 'don't show this again' button
        document.querySelector("#idSIButton9").click();
    }
} catch (error) {
    console.log("oops! logging into microsoft!", error);
}

// For the Microsoft 'select an account' page
try {
    if (document.body.innerText.indexOf('Pick an account') !== -1) {
        document.evaluate("//small[contains(., 'umass')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue.click();
    }
} catch (error) {
    console.log("oops! logging into microsoft!", error);
}