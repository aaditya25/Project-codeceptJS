const userreg = require("../Pages/userreg");
const contact_us = require("../Pages/contact_us");

Feature('Contact Us form');

//Enter all the data in contactus form and send it
Scenario('Contact us by entering all the details', ({ I, signinpage }) => {
    //Navigate to main page
    I.amOnPage(userreg.fields.mainpage);
    //login process
    signinpage.signin();
    signinpage.login();

    //Click on contactus option to open the form
    I.click(contact_us.fields.contactus);

    //Filling up the contactus form with valid data
    I.selectOption(contact_us.fields.heading, 'Customer service');
    I.seeInField(contact_us.fields.emailid, 'aadi.creed@gmail.com');
    I.selectOption(contact_us.fields.order_ref, '287053');
    I.scrollTo(contact_us.fields.message);
    I.selectOption(contact_us.fields.product, '0');
    I.fillField(contact_us.fields.message, 'This is for testing purpose');
    I.click(contact_us.fields.send);

    //Assertion to check if request is sent
    I.see(contact_us.fields.sent_conf);
});


//Try sending Contactus form without message
Scenario('Fill contact us form except the message field and press submit button', ({ I, signinpage }) => {
    //Navigate to main page
    I.amOnPage(userreg.fields.mainpage);
    //login process
    signinpage.signin();
    signinpage.login();

    //Click on contactus option to open the form
    I.click(contact_us.fields.contactus);

    //Filling up the contactus form with valid data
    I.selectOption(contact_us.fields.heading, 'Customer service');
    I.seeInField(contact_us.fields.emailid, 'aadi.creed@gmail.com');
    I.selectOption(contact_us.fields.order_ref, '287053');
    I.scrollTo(contact_us.fields.message);
    I.selectOption(contact_us.fields.product, '0');
    I.click(contact_us.fields.send);

    //Assertion to check if the error message is displayed as the message field is kept empty while trying to send contactus form
    I.see(contact_us.fields.sent_error);
});