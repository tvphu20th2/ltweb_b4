function KiemTra() {
    var tk = f.TenTaiKhoan.value;
    var mk = f.Password.value;
    var nlmk=f.RePassword.value
    var email = f.Email.value;
    var nn = f.NgheNghiep.value;
    var emailparttern =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (tk == '') {
        alert('Tên tài khoản không được bỏ trống');
        return false;
    }

    if (mk == '') {
        alert('Mật khẩu không được bỏ trống !');
        return false;
    }

    if (nlmk== '') {
        alert('Nhập lại mật khẩu không bỏ trống !');
        return false;
    }

    if (nn == '') {
        alert('Nghề nghiệp không được chọn !');
        return false;
    }

    if(!nlmk.test(mk))
    {
        alert('Nhập lại mật khẩu không đúng');
        return false
    }

    if(!emailparttern.test(email))
    {
        alert('Email không hợp lệ');
        return false;
    }

    return true;
}
