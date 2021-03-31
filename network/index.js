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