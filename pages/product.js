import navbar from "../components/navbar"
import { ListProduct } from "../data/data"

const productpage = () => {
  return `
        ${navbar()}
        <div class="heading_container heading_center">
        <h2>
          Latest Watches
        </h2>
      </div>
        ${ListProduct.map((item) => {
    return `
            <!-- shop section -->
            <section class="shop_section layout_padding">
              <div class="container">
                <div class="row">
                  <div class="col-sm-6 col-xl-3">
                    <div class="box">
                      <a href="">
                        <div class="img-box">
                        <a href="?id=${item.id}"><img src="${item.image}" alt=""></a>
                        </div>
                        <div class="detail-box">
                          <h6>
                            ${item.name}
                          </h6>
                          <h6>
                            Price:
                            <span>
                              ${item.price}
                            </span>
                          </h6>
                        </div>
                        <div class="new">
                          <span>
                            Featured
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <!-- end shop section -->
            `
  }).join("")
    }
    <div class="btn-box">
    <a href="">
      View All
    </a>
  </div>
    `
}
export default productpage