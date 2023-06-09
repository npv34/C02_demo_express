const ProductModel = require('../models/product.model')
class HomeController {
    static async getHomePage(req, res) {
        let {page, limit} = req.query;

        let result = await ProductModel.findAllProducts();
        let products = result[0];

        // phan trang
        let size = 3;
        let pages = Math.ceil(products.length / size);

        if (limit && page) {
            let offset = (page - 1) * size + 1;
            let result = await ProductModel.getProductPaginate(offset, size);
            products = result[0];
            console.log(products)
        }

        res.render('home', {data: products, totalPage: pages, size: size})
    }
}

module.exports = HomeController;
