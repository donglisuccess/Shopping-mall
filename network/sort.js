export function getSortList(){
	return new Promise((resolve,reject)=>{
		uni.request({
		    url: 'http://152.136.185.210:7878/api/m5/category',
		    success: (res) => {
		        if(res.statusCode == 200){
					resolve(res.data.data.category.list);
				}
		    }
		});
	})
}

export function getMinWallKeyData(miniWallkey){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:'http://152.136.185.210:7878/api/m5/subcategory/detail?miniWallkey='+miniWallkey,
			success:(res)=>{
				if(res.statusCode == 200){
					resolve(res.data)
				}
			}
		})
	})
}

export function getmaitKeyData(maitKey){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:'http://152.136.185.210:7878/api/m5/subcategory?maitKey='+maitKey,
			 success(res){
				 if(res.statusCode == 200){
					 resolve(res.data.data.list);
				 }
			 }
		})
	})
}