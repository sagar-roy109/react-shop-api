import React, { useState,useEffect } from 'react'
import { Fragment } from 'react'
import "../../assets/css/bootstrap.min.css"
import Product from '../Product/Product'

const Shop = () => {

	const [product, setproduct] = useState([])
	useEffect(() => {
		fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(products=>{
				setproduct(products);
			})
	}, [])
	return (
		<Fragment>
			<div className="container">
				<div className="row">
					{
						product.map(data=><Product product= {data} ></Product>)
					}
				</div>
			</div>
		</Fragment>
	)
}

export default Shop
