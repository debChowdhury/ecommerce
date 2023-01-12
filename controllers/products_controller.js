const ProductsModel = require('../models/products');

//controller for creating product
module.exports.createProduct = function(req, res){
    if(req.body.quantity < 1){
        res.json({'status':'error','msg':'Product quantity cannot be less than 1'});
        return;
    }
    ProductsModel.findOne({name:req.body.name}, function(err, product){
        if(err){
            console.log(err);
            res.json({'status':'error','msg':'Error in creating product'});
            return;
        }
        if(!product){
            ProductsModel.create({
                name: req.body.name,
                quantity: req.body.quantity
            }, function(err, product){
                if(err){
                    console.log(err);
                    res.json({'status':'error','msg':'Error in creating product'});
                }
                res.json({'status':'success','msg':'Successfully created product', 'data':product});
                
            });
        }
        else{
            res.json({'status':'error','msg':'Product already created'});
        }
    });
    
}

// controller for listing products
module.exports.productList = function(req, res){
    
    ProductsModel.find({}, function(err, rows){
        if(err){
            return console.log(err);
        }
        res.render('home',{
            'title': 'Product list',
            'products': rows
        })
    });
}

// Add product page
module.exports.addProductPage = function(req, res){
    
    res.render('add_product',{
        'title': 'Add Product'
    })
}

// Edit product page
module.exports.editProductPage = function(req, res){
    console.log(req);
    ProductsModel.findById(req.params.productId, function(err, product){
        if(err){
            return console.log(err);
        }
        res.render('edit_product',{
            'title': 'Edit product',
            'product': product
        })
    });
}

// controller for deleting a product
module.exports.deleteProduct = function(req, res){
    
    ProductsModel.findByIdAndDelete(req.body.productId, function(err, product){
        if(err){
            console.log(err);
            res.json({'status':'error','msg':'Error in deleting product'});
            return;
        }
        res.json({'status':'success','msg':'Successfully deleted product', 'data':product});
        console.log(err);
        console.log(product);
    
    });
    
}

//controller for editing product
module.exports.editProduct = function(req, res){
    if(req.body.quantity < 1){
        res.json({'status':'error','msg':'Product quantity cannot be less than 1'});
        return;
    }
    ProductsModel.findByIdAndUpdate(req.body.productId, {name:req.body.name, quantity:req.body.quantity}, function(err, product){
        if(err){
            console.log(err);
            res.json({'status':'error','msg':'Error in updating product'});
            return;
        }
        res.json({'status':'success','msg':'Successfully updated product', 'data':product});
    });
    
}