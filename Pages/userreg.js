const { I } = inject();

module.exports = {
    fields: {
        mainpage: '/',
        regemail: '#email_create',
        sign_in: '.login',
        user_create: '#SubmitCreate',
        gender: '#id_gender1',
        firstname: '#customer_firstname',
        lastname: '#customer_lastname',
        setpassword: '#passwd',
        birthdate: '#days',
        birthmonth: '#months',
        birthyear: '#years',
        company: '#company',
        address: '#address1',
        city: '#city',
        country: '#id_country',
        state: '#id_state',
        psotcode: '#postcode',
        otherdata: '#other',
        phone: '#phone',
        mobile_phone: '#phone_mobile',
        alias: '#alias',
        submit_data: '#submitAccount',
        login_email: '#email',
        login_passowrd: '#passwd',
        login_submit: '#SubmitLogin',
    },
    async login() {
        I.fillField(this.fields.login_email, 'aadi.creed@gmail.com');
        I.fillField(this.fields.login_passowrd, 'Aditya@123');
        I.click(this.fields.login_submit);
        I.see('Welcome to your account. Here you can manage all of your personal information and orders.');
    },
    async signin() {
        I.click(this.fields.sign_in);
        I.see('Authentication');
    },
    async newuserreg() {
        I.fillField(this.fields.regemail, 'aaadddiii@gmail.com');
        I.click(this.fields.user_create);
        I.wait(20);
        const radio_button = this.fields.gender;
        I.checkOption(radio_button)
        I.fillField(this.fields.firstname, 'Aditya');
        I.fillField(this.fields.lastname, 'Chaudhari');
        I.fillField(this.fields.setpassword, 'Aditya@123');
        I.selectOption(this.fields.birthdate, '20');
        I.selectOption(this.fields.birthmonth, '4')
        I.selectOption(this.fields.birthyear, '1990');
        I.fillField(this.fields.company, 'Ansang');
        I.fillField(this.fields.address, 'Thane');
        I.fillField(this.fields.city, 'Mumbai');
        I.selectOption(this.fields.country, '21');
        I.selectOption(this.fields.state, '2');
        I.fillField(this.fields.psotcode, '99501');
        I.fillField(this.fields.otherdata, 'This is only for testing purpose');
        I.fillField(this.fields.phone, '123456789');
        I.fillField(this.fields.mobile_phone, '987654321');
        I.fillField(this.fields.alias, 'My family');
        I.click(this.fields.submit_data);
        I.see('Welcome to your account. Here you can manage all of your personal information and orders.');
        I.wait(5);
    }
}