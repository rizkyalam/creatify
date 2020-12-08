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
}