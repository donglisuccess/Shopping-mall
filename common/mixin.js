import {debound} from "./utils.js";

export const imageload = {
	data(){
		return {
			refresh:null,
		}
	},
	mounted(){
		this.refresh = debound(function(){console.log("hhh")},30,false);
		this.$bus.$on("imageLoadFinish",()=>{
			this.refresh();
		})
	}
}