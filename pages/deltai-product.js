import { ListProduct } from "../data/data";
import { router } from "../libs";
const product_deltail = ({ data: { id } }) => {
    console.log(id);
    const list = ListProduct.find(function (list) {
        return list.id == id;
    })
    if(!list){
        return router.navigate("/")
    }
    return `
    <div class="row">
    <div class="col-sm-6 col-xl-3">
      <div class="box">
          <div class="img-box">
  <a href="${list.id}" alt=""><img src="${list.image}" alt=""></a>
          </div>
          <div class="detail-box">
          <a href="${list.id}" alt=""><h6>
          ${list.name}
        </h6></a>
            <h6>
              giá tiền:
              <span>
                ${list.price}
                vnđ
              </span>
            </h6>
          </div>
          <div class="new">
            <span>
              <?= $list['tinhtrang'] ?>
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
    `
}

export default product_deltail