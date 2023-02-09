import { ListProduct } from "../../data/data";
import { useEffect, useState } from "../../libs"

const adminproduct = () => {
  const [data,setdata] = useState([]);
  // console.log(data);
  useEffect(()=>{
    const products = JSON.parse(localStorage.getItem("product"))||[];
    setdata(products)
},[])
  // chạy sau khi render
  useEffect(()=>{
      const btns = document.querySelectorAll("#btn-xoa");
      // console.log(btns);

      for(let btn of btns){
        // lấy id
        const id = btn.dataset.id;
        // console.log(id);

        btn.addEventListener("click",function(){
        const newdata = data.filter((product)=>{
          return product.id != id;
        // console.log(product.id);

        })
        setdata(newdata)
          // localStorage.setItem("product",JSON.stringify(newdata)); //set lại data ở localStorage
        })
      }
  })
  return `
  <table>
  <thead>
    <tr>
      <th>id</th>
      <th>name</th>
      <th>action</th>
    </tr>
  </thead>
  <tbody>
  ${data.map((product,index)=>{
    return `
    <tr>
    <td>${index + 1}</td>
    <td>${product.name}</td>
    <td>
    <td>
<button data-id="${product.id}" id="btn-xoa">xóa</button>
    </td>
  </tr>
    `
  }).join("")}
  </tbody>
</table>
  `
}

export default adminproduct