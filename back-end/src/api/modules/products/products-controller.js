class ProductsController {
  constructor(service) {
    /**
     * @type {import('./products-service').ProductsService}
     */
    this.productsService = service;

    this.findAllProducts = this.findAllProducts.bind(this);
  }

  async findAllProducts(req, res) {
    const products = await this.productsService.findAllProducts();
    return res.json(products);
  }
}

module.exports = { ProductsController };
