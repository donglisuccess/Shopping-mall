// 这里是用来发送请求的文件
export function swipper(){
	return new Promise((resolve,reject)=>{
		uni.request({
		    url: 'http://123.207.32.32:8000/home/multidata', //仅为示例，并非真实接口地址。
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