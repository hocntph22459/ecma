import { ListProduct } from "../data/data"

const listproduct = () => {
    return `
  <h1>admin product</h1>
  ${ListProduct.map(pro => {
        return `
    <div class="product">
  <div class="item"><img src="${pro.image}" alt=""><h3>${pro.name}</h3><p>${pro.price}</p></div>
</div>
    `
    }).join("")}
  `
}

export default listproduct