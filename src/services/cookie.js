const setCookie = (name, value) => {
  const Days = 30;
  const exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${JSON.stringify(value)};expires=${exp.toGMTString()};path=/`;
};

const getCookie = name => {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  let arr = document.cookie.match(reg);
  return arr ? JSON.parse(arr[2]) : null;
};

export { setCookie, getCookie };
