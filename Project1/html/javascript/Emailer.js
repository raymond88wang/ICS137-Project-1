function sendEmail() {
    var email = document.getElementsByName('email')[0].value;
    document.getElementById('checkoutForm').action = "mailto:" + email + "?subject=Purchase Order";
    document.getElementById('checkoutForm').method = "post";
    document.getElementById('checkoutForm').enctype = "text/plain";
};