import { ListProduct } from "../data/data"

const listhome = ({list}) => {
  return `
  ${ListProduct.map((item) => {
    return `
        <div class="row">
        <div class="col-sm-6 col-xl-3">
          <div class="box">
              <div class="img-box">
  <a href="?id=${item.id}" alt=""><img src="${item.image}" alt=""></a>
              </div>
              <div class="detail-box">
                <h6>
                  ${item.name}
                </h6>
                <h6>
                  giá tiền:
                  <span>
                    ${item.price}
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
  }).join("")
    }
  `
}

export default listhome