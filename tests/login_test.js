const userreg = require("../Pages/userreg");

Feature('User login');

Scenario('login into the webapp', ({ I, signinpage }) => {
    //Navigate to main page
    I.amOnPage(userreg.fields.mainpage);
    //login process
    signinpage.signin();
    signinpage.login();
});