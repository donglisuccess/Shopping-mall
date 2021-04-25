export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};



// 设置防抖函数
export function debound(func, wait, imme) {
      let timeout,result;
      let debounded = function () {
        let context = this;
        let args = arguments;
        clearTimeout(timeout);
        if (imme) {
          let now = !timeout;
          timeout = setTimeout(() => {
            timeout = null;
          }, wait);
          if (now) result = func.apply(context, args);
        } else {
          timeout = setTimeout(function () {
            result = func.apply(context, args);
          }, wait);
        }
        return result;
      }
      debounded.cancel = function(){
        clearTimeout(timeout);
        timeout = null;
      }
      return debounded;
    }

