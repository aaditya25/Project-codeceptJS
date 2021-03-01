const userreg = require("../Pages/userreg");

Feature('User Registration');

Scenario('Register using new user', ({ I, signinpage }) => {
    //Navigate to main page
    I.amOnPage(userreg.fields.mainpage);
    //User registration process
    signinpage.signin();
    signinpage.newuserreg();
});
