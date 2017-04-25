var form = document.getElementById('checkoutForm');
var email = document.getElementsByName('email')[0];
var fields = form.getElementsByTagName('input');
var purchaseBtn = document.getElementsByClassName('purchaseBtn')[0];

(function () {
    for (var i = 0; i < fields.length; ++i) {
        fields[i].addEventListener("keyup", function (event) {
            if (event.currentTarget.validity.valid) {
                event.currentTarget.style.borderColor = '';
            }
        });
    }
})();

form.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        checkFieldsValidity();
    }
}, false);

purchaseBtn.addEventListener("click", function (event) {
    checkFieldsValidity();
}, false);

function checkFieldsValidity() {
    for (var i = 0; i < fields.length; ++i)
    {
        if (!fields[i].validity.valid) {
            fields[i].style.borderColor = 'red';
        }
    }
};