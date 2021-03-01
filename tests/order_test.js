const userreg = require("../Pages/userreg");
const homepage = require("../Pages/homepage");
const order = require('../Pages/order');
const dress_detailview_page = require("../Pages/dress_detailview_page");

Feature('Oder an item');

Scenario('Oder an item from detialed view', ({ I, signinpage }) => {
  //Navigate to main page
  I.amOnPage(userreg.fields.mainpage);
  //login process
  signinpage.signin();
  signinpage.login();

  //Go back to homepage
  I.click(homepage.fields.logo);

  //Select product to order
  I.scrollTo(homepage.fields.product);
  I.click(homepage.fields.product);
  I.wait(2);

  //Detailted view of the product
  I.see(dress_detailview_page.fields.detailed_view);
  I.click(dress_detailview_page.fields.dress_view);
  I.wait(2);
  I.click(dress_detailview_page.fields.close_zoomview);
  I.wait(2);
  I.click(dress_detailview_page.fields.add_dress);
  I.wait(2);
  //Add number of dresses to buy
  I.seeInField(dress_detailview_page.fields.quantity,'2');

  //Change the size
  I.selectOption(dress_detailview_page.fields.size, '2');
  I.selectOption(dress_detailview_page.fields.size, '3');
  I.selectOption(dress_detailview_page.fields.size, '1');

  //Change color of dess
  I.click(dress_detailview_page.fields.color_beige);
  I.wait(2);
  I.click(dress_detailview_page.fields.color_pink);

  //Add to cart
  I.click(dress_detailview_page.fields.add_to_cart);
  I.see(order.fields.added_to_cart);
  I.click(order.fields.proceed_to_checkout);

  //User direceted to shopping cart
  I.see(order.fields.shopping_cart);
  I.scrollTo(order.fields.proceed_to_checkout_1);
  I.click(order.fields.proceed_to_checkout_1);

  //Check for the saved address
  I.see(order.fields.address);
  I.scrollTo(order.fields.proceed_to_checkout_2);
  I.click(order.fields.proceed_to_checkout_2);

  //Check for shipping detials with Terms & conditions
  I.see(order.fields.shipping);
  I.scrollTo(order.fields.terms_and_conditions);
  I.click(order.fields.terms_and_conditions);
  I.scrollTo(order.fields.proceed_to_checkout_3);
  I.click(order.fields.proceed_to_checkout_3);

  //Payment page
  I.see(order.fields.payment_page);
  I.scrollTo(order.fields.payment_option);
  //Select payment option
  I.click(order.fields.payment_option);
  I.see(order.fields.order_summary);
  I.scrollTo(order.fields.proceed_to_checkout_4);
  I.click(order.fields.proceed_to_checkout_4);

  //Assertion for order confirmation
  I.see(order.fields.order_confirmation);
});

