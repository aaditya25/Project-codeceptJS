const { I } = inject();

module.exports = {
    fields: {
        logo: '#header_logo',
        product: '//*[@id="homefeatured"]/li[4]/div/div[2]/h5/a',
        dresses: '//*[@id="block_top_menu"]/ul/li[2]/a',
        summer_dresses: '//*[@id="block_top_menu"]/ul/li[2]/ul/li[3]/a',
        summer_dresses_check: 'SUMMER DRESSES',
        list_view: '#list',
        list_view_check: '.list',
        grid_view: '#grid',
        grid_view_check: '.grid'
    }
}