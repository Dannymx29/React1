import React from 'react';
import ProductInfo from '../components/ProductInfo';
import '../style/ProductDetail.scss';

const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src="./icons/icon_close.png" alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;