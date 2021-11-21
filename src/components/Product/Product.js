import React from 'react'
import { Fragment } from 'react'
import "../Product/Product.css"

const Product = (productData) => {
	return (
		<Fragment>
			<div className="col-md-4">
					<div className="product-container shadow mb-4 p-3">
						<div className="product-header">
							<div className="image">
								<img className="img-fluid" src={productData.product.image} alt="" />
								<p className="category">{productData.product.category}</p>
							</div>
							<h3>{productData.product.title}</h3>
						</div>
						<div className="product-footer ">
							<p className="price">{productData.product.price}$</p>
							<div className="btn btn-primary add-to-cart">Add To Cart</div>
						</div>
					</div>
				</div>
		</Fragment>
	)
}

export default Product
