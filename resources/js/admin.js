export default () => {
    // sidebar
    $('.navbar-admin__left--sidebar').on('click', function(e){
        e.preventDefault();
        $('.sidebar').toggleClass('active');
        $('.navbar-admin').toggleClass('active');
        $('.main-content-admin').toggleClass('active');
    });

    // close di sidebar
    $('.sidebar--close').on('click', function(e){
        e.preventDefault;
        $('.sidebar').removeClass('active');
        $('.navbar-admin').removeClass('active');
    });

    const flash = $('.flash-msg').data('flash');

    switch(flash) {
        case 'store':            
            Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Data Berhasil Di Tambah !',
            });
        break;
        case 'update':
            Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Data berhasil Di Ubah !',
            });
        break;
        case 'destroy':
            Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Data berhasil Di Hapus !',
            });
        break;
        case 'wrong-pwd':
            Swal.fire({
            icon: 'warning',
            title: 'Error',
            text: 'Password lama yang anda masukan tidak sesuai !',
            });
        break;
        case 'login':
            Swal.fire({
            icon: 'success',
            title: 'Sukses',
            text: 'Login Berhasil',
            });
        break;
    }        
}