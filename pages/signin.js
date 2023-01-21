const signinpage = ()=>{
    return `
    <div class="container">
        <div class="panel panel-primary">
            <div class="panel-heading"> <br>
                <h2 class="text-center">ĐĂNG KÝ THÀNH VIÊN</h2>
            </div>
            <form action="" method="post" enctype="multipart/form-data">
                <div class="mb-3">
                    <label for="" class="form-label">Tên khách hàng</label> <br>
                    <input type="text" class="form-control my-4" id="pwd" placeholder="Nhập tên" name="hoten">
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">email</label> <br>
                    <input type="email" class="form-control my-4" id="pwd" placeholder="Nhập tên" name="email">
                </div>
                <div class="mb-3 mt-3">
                    <label for="" class="form-label">mật khẩu</label> <br>
                    <input type="password" class="form-control my-4" id="matkhau" placeholder="Nhập mật khẩu" name="matkhau">
                </div>
                <div class="mb-3 mt-3">
                    <label for="" class="form-label">nhập lại mật khẩu</label> <br>
                    <input type="password" class="form-control my-4" id="rmatkhau" placeholder="Nhập lại mật khẩu" name="rmatkhau">
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Số điện thoại</label> <br>
                    <input type="text" class="form-control my-4" id="phone" placeholder="Nhập số điện thoại" name="phone">
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Địa chỉ</label> <br>
                    <input type="text" class="form-control my-4" id="diachi" placeholder="Nhập địa chỉ" name="diachi">
                </div>
                <button class="btn btn-success" name="btn" id="bt">Đăng ký</button>
            </form>
        </div>
    </div>
    `
}
export default signinpage