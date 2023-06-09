const BaseModel = require('./base.model')
class ProductModel extends BaseModel {
    async findAllProducts() {
        const sql = 'CALL findAllProduct';
        return await this.querySQL(sql);
    }

    async getProductPaginate(offset,size) {
        const sql = `CALL findAllProductPaginate(${offset},${size})`;
        return await this.querySQL(sql);
    }
}

module.exports = new ProductModel()
