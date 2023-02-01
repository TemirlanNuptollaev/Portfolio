import React from 'react'
import Product from '../components/product/Product';
import {products} from "./../helpers/productsList"

function Store() {
  return (
    <>
		<main className="section">
			<div className="container">
				<h2 className="title-1">Products</h2>
				<ul className="projects">
					{products.map((project, index) => {
						return (
							<Product
								key={index}
								title={project.title}
								img={project.img}
								index={index}
							/>
						);
					})}
				</ul>
			</div>
		</main>
		</>
  )
}

export default Store