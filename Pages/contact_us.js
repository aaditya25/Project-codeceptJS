const { I } = inject();

module.exports = {
    fields: {
        logo: '#header_logo',
        contactus: '#contact-link',
        heading: '#id_contact',
        emailid: '#email',
        order_ref: '//*[@id="center_column"]/form/fieldset/div[1]/div[1]/div[2]/div/select',
        message: '#message',
        product: '//*[@id="287053_order_products"]',
        send: '#submitMessage',
        sent_conf: 'Your message has been successfully sent to our team.',
        sent_error: 'The message cannot be blank.'
    }
}