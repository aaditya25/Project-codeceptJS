const { I } = inject();

module.exports = {
  fields: {
    added_to_cart: 'Product successfully added to your shopping cart',
    proceed_to_checkout: '//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a',
    proceed_to_checkout_1: '//*[@id="center_column"]/p[2]/a[1]',
    proceed_to_checkout_2: '//*[@id="center_column"]/form/p/button',
    proceed_to_checkout_3: '//*[@id="form"]/p/button',
    proceed_to_checkout_4: '//*[@id="cart_navigation"]/button',
    shopping_cart: 'SHOPPING-CART SUMMARY',
    address: 'ADDRESSES',
    shipping: 'SHIPPING',
    terms_and_conditions: '#cgv',
    payment_page: 'PLEASE CHOOSE YOUR PAYMENT METHOD',
    payment_option: '.cheque',
    order_summary: 'ORDER SUMMARY',
    order_confirmation: 'ORDER CONFIRMATION'
  }
}
