const account_details = require("../Pages/account_details");
const userreg = require("../Pages/userreg");
//const homepage = require("../Pages/homepage");

Feature('check all User account detials');

//Check order history
Scenario('User order history', ({ I, signinpage }) => {
  //Navigate to main page
  I.amOnPage(userreg.fields.mainpage);
  //login process
  signinpage.signin();
  signinpage.login();

  //Click to check order history
  I.click(account_details.fields.Orderhistory);
  //Assertion for checking if user is directed to correct page
  I.see(account_details.fields.Oderhistory_Assert);
  I.click(account_details.fields.backtoaccount);
  //Assertion for checking if user is directed to correct page
  I.see(account_details.fields.myaccount);
});


//Check credit slips
Scenario('User credit slips', ({ I, signinpage }) => {
  //Navigate to main page
  I.amOnPage(userreg.fields.mainpage);
  //login process
  signinpage.signin();
  signinpage.login();

  //Click to check credit slips
  I.click(account_details.fields.Credit_slips);
  //Assertion for checking if user is directed to correct page
  I.see(account_details.fields.Credit_slip_Assert);
  I.click(account_details.fields.backtoaccount);
  //Assertion for checking if user is directed to correct page
  I.see(account_details.fields.myaccount);
});


//Check saved address
Scenario('User address check', ({ I, signinpage }) => {
  //Navigate to main page
  I.amOnPage(userreg.fields.mainpage);
  //login process
  signinpage.signin();
  signinpage.login();

  //Click to check saved address
  I.click(account_details.fields.address);
  //Assertion for checking if user is directed to correct page
  I.see(account_details.fields.address_Assert);
  I.click(account_details.fields.backtoaccount);
  //Assertion for checking if user is directed to correct page
  I.see(account_details.fields.myaccount);
});


//Check personal information
Scenario('User personal information', ({ I, signinpage }) => {
  //Navigate to main page
  I.amOnPage(userreg.fields.mainpage);
  //login process
  signinpage.signin();
  signinpage.login();

  //Click to check personal information
  I.click(account_details.fields.personal_info);
  //Assertion for checking if user is directed to correct page
  I.see(account_details.fields.personal_info_Assert);
  I.click(account_details.fields.backtoaccount);
  //Assertion for checking if user is directed to correct page
  I.see(account_details.fields.myaccount);
});

//Check wishlist
Scenario('User wishlist check', ({ I, signinpage }) => {
  //Navigate to main page
  I.amOnPage(userreg.fields.mainpage);
  //login process
  signinpage.signin();
  signinpage.login();

  //Click to check wishlist
  I.click(account_details.fields.wishlist);
  //Assertion for checking if user is directed to correct page
  I.see(account_details.fields.wishlist_Assert);
  I.click(account_details.fields.backtoaccount_1);
  //Assertion for checking if user is directed to correct page
  I.see(account_details.fields.myaccount);
});