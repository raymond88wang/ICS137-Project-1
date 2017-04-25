var products = [];
products.push(`
    <img src="images/BlackJacket/BlackJacket1.png" alt="BlackJacket1" />
    <img src="images/BlackJacket/BlackJacket2.png" alt="BlackJacket2" />
`);
products.push(`
    <img src="images/BlackSneaker/BlackSneaker1.png" alt="BlackSneaker1" />
    <img src="images/BlackSneaker/BlackSneaker2.png" alt="BlackSneaker2" />
    <img src="images/BlackSneaker/BlackSneaker3.png" alt="BlackSneaker3" />
    <img src="images/BlackSneaker/BlackSneaker4.png" alt="BlackSneaker4" />
    <img src="images/BlackSneaker/BlackSneaker5.png" alt="BlackSneaker5" />
`);
products.push(`
    <img src="images/BlackTShirt/BlackTShirt1.png" alt="BlackTShirt1" />
    <img src="images/BlackTShirt/BlackTShirt2.png" alt="BlackTShirt2" />
`);
products.push(`
    <img src="images/CactusPajama/CactusPajama1.png" alt="CactusPajama1" />
    <img src="images/CactusPajama/CactusPajama2.png" alt="CactusPajama2" />
    <img src="images/CactusPajama/CactusPajama3.png" alt="CactusPajama3" />
`);
products.push(`
    <img src="images/CheeseBag/CheeseBag1.png" alt="CheeseBag1" />
    <img src="images/CheeseBag/CheeseBag2.png" alt="CheeseBag2" />
    <img src="images/CheeseBag/CheeseBag3.png" alt="CheeseBag3" />
`);
products.push(`
    <img src="images/GreenShirt/GreenShirt1.png" alt="GreenShirt1" />
    <img src="images/GreenShirt/GreenShirt2.png" alt="GreenShirt2" />
    <img src="images/GreenShirt/GreenShirt3.png" alt="GreenShirt3" />
`);
products.push(`
    <img src="images/PinkHoodie/PinkHoodie1.png" alt="PinkHoodie1" />
    <img src="images/PinkHoodie/PinkHoodie2.png" alt="PinkHoodie2" />
    <img src="images/PinkHoodie/PinkHoodie3.png" alt="PinkHoodie3" />
`);
products.push(`
    <img src="images/StrawHat/StrawHat1.png" alt="StrawHat1" />
    <img src="images/StrawHat/StrawHat2.png" alt="StrawHat2" />
`);
products.push(`
    <img src="images/TruckerHat/TruckerHat1.png" alt="TruckerHat1" />
    <img src="images/TruckerHat/TruckerHat2.png" alt="TruckerHat2" />
`);
products.push(`
    <img src="images/Watch/Watch1.png" alt="Watch1" />
    <img src="images/Watch/Watch2.png" alt="Watch2" />
    <img src="images/Watch/Watch3.png" alt="Watch3" />
    <img src="images/Watch/Watch4.png" alt="Watch4" />
`);

(function () {
    var productId = document.location.href.split('?')[1].split('=')[1];
    document.getElementsByName('productID')[0].value = productId;
    document.getElementById('productDetails').innerHTML = products[productId];
})();