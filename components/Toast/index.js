import toast from "./Toast.vue";
import Vue from "vue";  
const obj = {
	
}
obj.install = function(Vue){
	// 1、使用组件构造器
	const toastConstructor = Vue.extend(toast);
	// 2、新建一个组件
	const newToast = new toastConstructor();
	// 3、将组件的挂载到一个div上面
	newToast.$mount(document.createElement('view'));
	// 4、将$el放入document中
	document.body.appendChild(newToast.$el);
	// 5、在原型上面使用
	Vue.prototype.$toast = newToast;
}

export default obj;