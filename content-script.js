/*
* Ibrahim Hasaan 2023
* MIT License
*/

try {
    // For Moodle
    if (window.location.href.indexOf('umass.moonami.com') != -1) {
        document.querySelectorAll("a[href='https://umass.moonami.com/login/index.php']")[0].click();
    }
    
    // For Spire 
    if (window.location.href.indexOf('umass.edu/spire/') != -1) {
        document.querySelectorAll("a[href='https://www.spire.umass.edu/psp/heproda/?cmd=login']")[0].click();
    }

    // For Canvas (1)
    if (window.location.href.indexOf('umamherst.instructure') != -1) {
        document.querySelector("#global_nav_login_link").click();
    }

    // For Canvas (UMass IT)
    if (window.location.href.indexOf('www.umass.edu/it') != -1) {
        document.querySelectorAll("a[href='https://umamherst.instructure.com/login/saml']")[0].click();
    }
}
catch(error) {
    console.log("oops! there's an error logging in ", error);
}