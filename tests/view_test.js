const homepage = require("../Pages/homepage");
const userreg = require("../Pages/userreg");

Feature('Check the UI with different views');

Scenario('Change view to List', ({ I }) => {
    //Navigate to main page
    I.amOnPage(userreg.fields.mainpage);

    //Navigate to summer dresses page
    I.moveCursorTo(homepage.fields.dresses)
    I.click(homepage.fields.summer_dresses)
    I.see(homepage.fields.summer_dresses_check)

    //Change view to list view
    I.scrollTo(homepage.fields.list_view)
    I.wait(5)
    I.click(homepage.fields.list_view)

    //Check if the view is changed to list view
    I.seeElement(homepage.fields.list_view_check)
});

Scenario('Change view to Grid', ({ I }) => {
    //Navigate to main page
    I.amOnPage(userreg.fields.mainpage);

    //Navigate to summer dresses page
    I.moveCursorTo(homepage.fields.dresses);
    I.click(homepage.fields.summer_dresses);
    I.see(homepage.fields.summer_dresses_check);

    //Change view to grid view
    I.scrollTo(homepage.fields.grid_view);
    I.click(homepage.fields.grid_view);

    //Check if the view is changed to grid view
    I.seeElement(homepage.fields.grid_view_check);
});