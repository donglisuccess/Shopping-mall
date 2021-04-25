// 这里是用来发送请求的文件
export function swipper(){
	return new Promise((resolve,reject)=>{
		uni.request({
		    url: 'http://123.207.32.32:8000/home/multidata', 
		    success: (res) => {
		        if(res.statusCode =="200"){
					resolve(res);
				}
		    }
		});
	},reject=>{
		reject("数据查询失败")
	})
}

// 请求首页的展示图片的数据
export function showImage(type,page){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:"http://152.136.185.210:7878/api/m5/home/data",
			data:{
				type,
				page
			},
			success:(res)=>{
				if(res.statusCode == 200){
					resolve(res.data);
				}
			}
		})
	},error=>{
		console.log("查询数据失败")
	})
}

// 根据每一个iid请求数据
export function requestByiid(iid){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:"http://152.136.185.210:7878/api/m5/detail",
			data:{
				iid,
			},
			success:(res)=>{
				if(res.statusCode == 200){
					resolve(res.data);
				}
			}
		})
	},error=>{
		reject("请求数据失败")
	})
}

// 这里请求detail页面中的衣服描述数据
export class clothInfomation{
	constructor(result) {
	    this.title = result.itemInfo.title;
		this.price = result.itemInfo.price;
		this.prePrice = result.itemInfo.oldPrice;
		this.discountDesc = result.itemInfo.discountDesc;
		this.columns = result.columns;
		this.services = result.shopInfo.services;
	}
}

// 这里获取detail店铺中的数据
export class shopInfomation{
	constructor(result) {
	    this.shopLogo = result.shopInfo.shopLogo;
		this.name = result.shopInfo.name;
		this.shopUrl = result.shopInfo.shopUrl;
		this.cGoods = result.shopInfo.cGoods;
		this.cSells = result.shopInfo.cSells;
		this.score = result.shopInfo.score;
	}
}

// 这里获取detailImage
export class detailImage{
	constructor(result) {
	    this.image = result.detailInfo.detailImage;
	}
}

// 这里设置相关参数
export class clothParams{
	constructor(params) {
	    this.set = params.info.set;
		this.tables = params.rule.tables;
	}
}

// 这里设置评价信息
export class assessItem{
	constructor(rate) {
	    this.avatar = rate.list ? rate.list[0].user.avatar:" ";
		this.uname = rate.list ? rate.list[0].user.uname :" ";
		this.content = rate.list ? rate.list[0].content:" ";
		this.created = rate.list ? rate.list[0].created : " ";
		this.style = rate.list ? rate.list[0].style :" ";
		this.images = rate.list ? rate.list[0].images:" ";
	}
}


// 导出推荐数据
export function recommend(){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:"http://152.136.185.210:7878/api/m5/recommend",
			success:(res)=>{
				if(res.statusCode == 200){
					resolve(res.data);
				}
			}
		})
	})
}

// 这里导出的是需要添加到加入购物车的信息
export class addCartInfo{
	constructor(result) {
	    this.image = result.itemInfo.topImages[0];
		this.iid = result.itemInfo.iid;
		this.title = result.itemInfo.title;
		this.price = result.itemInfo.lowNowPrice;
		this.name = result.shopInfo.name;
	}
}


// 设置浏览记录
export class historyRecord{
	constructor(result) {
	    this.image = result.itemInfo.topImages[0];
		this.price = result.itemInfo.price;
		this.title = result.itemInfo.title;
		this.iid = result.itemInfo.iid;
	}
}
