import { router, useEffect } from "../../libs";

const adminaddproduct = () => {
    // kiểm tra localStorage có dữ liệu không?
    // nếu có thì lấy dữ liệu
    // ngược lại thì gán mảng rỗng
    const productlist = JSON.parse(localStorage.getItem("product")) || [];
    // console.log(productlist);
    useEffect(()=>{
        const form = document.querySelector("#form");
        const name = document.querySelector("#input");
        // console.log(form,name);

        form.addEventListener("submit",(e)=>{
            e.preventDefault();

            const newproduct = {
                id:productlist.length + 1,
                name:name.value
            }

            productlist.push(newproduct);

             // lưu vào localStorage dưới dạng chuỗi
             localStorage.setItem("product",JSON.stringify(productlist));
             // console.log(localStorage.getItem("projects"));
            // điều hướng về trang projects
            router.navigate("/admin/product");
        });
    });
    return `
  <form action="" id="form">
  <h2>thêm product</h2>
  <div><label for="">nhập tên</label></div>
  <div><input type="text" id="input"></div>
  <button id="btn">thêm</button>
</form>
  `
}

export default adminaddproduct