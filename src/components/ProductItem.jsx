import React, { useState } from 'react';
import '@style/ProductItem.scss';

import atc from '@icons/bt_add_to_cart.svg';

const img = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const ProductItem = () => {
	const [cart, setCart] = useState([]);

	const handleClick = () => {
		setCart([]);
	}
	return (
		<div className="ProductItem">
			<img src={ img } alt="" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Bike</p>
				</div>
				<figure onClick={handleClick}>
					<img src={ atc } alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;