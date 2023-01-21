import homepage from "./pages/home";
import signinpage from "./pages/signin";
import productpage from "./pages/product";
import error from "./pages/404";
import contact from "./pages/contact";
import { router } from "./libs";
// tìm id index để hiển thị
const app = document.querySelector("#app")
// 
const render = (home,product) => {
  home.innerHTML = product();
}

// tạo các đường dẫn đến các page
router.on('/',()=>{
  render(app,homepage);
})
router.on('/signin',()=>{
  render(app,signinpage);
})
router.on('/product',()=>{
  render(app,productpage)
})
router.on('/contact-us',()=>{
  render(app,contact)
})
router.on('/404',()=>{
  render(app,error)
})
router.resolve()

