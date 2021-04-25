// 这里是店铺的信息
export class shopName{
	constructor(shopInfo) {
		this.logo = shopInfo.shopLogo;
		this.name = shopInfo.name;
		this.fans = shopInfo.cFans;
		this.goods = shopInfo.cGoods;
	}
}

export class praiseScore{
	constructor(shopInfo) {
	    this.score = shopInfo.score;
		this.goods = shopInfo.cGoods;
		this.sells = shopInfo.cSells;
	}
}