const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        //{} = filtros
        //{page=1, limit:10} = qual pagina está e quandos registros por pagina deve buscar

        const { page = 1 } = req.query;
        const products = await Product.paginate({}, {page, limit:10});
        return res.json(products);
    },
    async show(req, res){
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },
    async store(req, res){
        const product = await Product.create(req.body);

        return res.json(product);
    },
    async update(req, res){
        //new:true = vai add dados do produto já atualizado na propriedade product.
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});

        return res.json(product);
    },
    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
};