import homepage from "./pages/home";
import signinpage from "./pages/signin";
import productpage from "./pages/product";
import error from "./pages/404";
import contact from "./pages/contact";
import { render, router } from "./libs";
import product_deltail from "./pages/deltai-product";
import adminproduct from "./pages/admin/product";
import adminaddproduct from "./pages/admin/addproduct";
// import product_deltail from "./components/product_deltail";
// tìm id index để hiển thị
const app = document.querySelector("#app")
// tạo các đường dẫn đến các page
router.on('/',()=>{
  render(homepage,app);
})
router.on('/signin',()=>{
  render(signinpage,app);
})
router.on('/product',()=>{
  render(productpage,app)
})
router.on('/contact',()=>{
  render(contact,app)
})

router.on('/product/:id',(params)=>{
  render(function(){
    return product_deltail(params)
  },app)
})

router.on('/admin/product',()=>{
  render(adminproduct,app)
})
router.on("/admin/product/add",()=>{
  render(adminaddproduct,app)
})

router.notFound(()=>{
  render(error,app)
})
router.resolve()

