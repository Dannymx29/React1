import React from 'react';
import ProductInfo from '@components/ProductInfo';
import '@style/ProductDetail.scss';

import iclose from '@icons/icon_close.png';

const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={ iclose } alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;