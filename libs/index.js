import Navigo from "navigo";
// khởi tạo 1 object từ Navigo
const router = new Navigo('/',{linksSelector:'a'});

const render = (home,product) => {
    home.innerHTML = product();
  }
export {router,render};