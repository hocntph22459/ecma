import header from "../components/header"

const contact = ()=>{
    return `
    ${header()}
    <section class="contact_section layout_padding">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="form_container">
          <div class="heading_container">
            <h2>
              Liên hệ chúng tôi
            </h2>
          </div>
          <form action="" method="post">
            <div>
              <input name="name" type="text" placeholder="Họ và tên " />
            </div>
            <div>
              <input name="noidung" type="text" class="message-box" placeholder="Thông điệp" />
            </div>
            <div>
              <input name="email" type="email" placeholder="E-mail" />
            </div>
            <div>
              <input name="phone" type="text" placeholder="Số điện thoại" />
            </div>
            <div class="d-flex ">
              <button name="btn" onclick="return confirm('bạn có chắc gửi phản hồi cho chúng tôi!')">
                Gủi
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-6">
        <div class="img-box">
          <img src="./views/src/images/contact-img.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</section>
    
    `
}
export default contact