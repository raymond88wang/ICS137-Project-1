function sendEmail() {
    var email = document.getElementsByName('email')[0].value;
    var subject = "Purchased%20" + document.getElementsByName('quantity')[0].value + "%20" + document.getElementsByName('productID')[0].value;
    document.getElementById('checkoutForm').action = "mailto:" + email + "?subject=" + subject;
    document.getElementById('checkoutForm').method = "post";
    document.getElementById('checkoutForm').enctype = "text/plain";
};