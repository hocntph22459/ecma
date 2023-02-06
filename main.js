import homepage from "./pages/home";
import signinpage from "./pages/signin";
import productpage from "./pages/product";
import error from "./pages/404";
import contact from "./pages/contact";
import { render, router } from "./libs";
import product_deltail from "./pages/deltai-product";
// import product_deltail from "./components/product_deltail";
// tìm id index để hiển thị
const app = document.querySelector("#app")
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
router.on('/contact',()=>{
  render(app,contact)
})

router.on('/product/:id',(params)=>{
  render(app,function(){
    return product_deltail(params)
  })
})


router.notFound(()=>{
  render(app,error)
})
router.resolve()

