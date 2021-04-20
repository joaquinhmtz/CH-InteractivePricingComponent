let slider          = document.getElementById("slider-range");
let price           = document.getElementById("final-price");
let package         = document.getElementById("package");
let switchPrice     = document.querySelector("input[type=checkbox]");
let value;
let checked;

slider.oninput = function() {
    changeValues(slider.value, checked);
}

let init = () => {
    checked = false;
    price.innerHTML = '$16.00';
    package.innerHTML = '100K Pageviews';
    value = 50;
    slider.style.background = 'linear-gradient(to right, var(--softCyan) 0%, var(--softCyan) ' + value + '%, var(--lightGrayishBlue1) ' + value + '%, var(--lightGrayishBlue1) 100%)';
}

switchPrice.addEventListener('change', (e) => {
    checked = e.target.checked;
    changeValues(slider.value, checked);
});


let changeValues = (data, check) => {
    let res = 0;
    switch (parseInt(data)) {
        case 0 :
            price.innerHTML = (check ? (res = 8 - (8*.25)) : 8);
            package.innerHTML = '10';
        break;
        case 1 :
            price.innerHTML = (check ? (res = 12 - (12*.25)) : 12);
            package.innerHTML = '50';
        break;
        case 2 :
            price.innerHTML = (check ? (res = 16 - (16*.25)) : 16);
            package.innerHTML = '100';
        break;
        case 3 :
            price.innerHTML = (check ? (res = 24 - (24*.25)) : 24);
            package.innerHTML = '500';
        break;
        case 4 :
            price.innerHTML = (check ? (res = 36 - (36*.25)) : 36);
            package.innerHTML = '1M';
        break;
    }

    price.innerHTML = '$' + price.innerHTML + '.00';
    package.innerHTML += 'K Pageviews';

    value = (parseInt(data) - slider.min) / ( slider.max - slider.min ) * 100;
    slider.style.background = 'linear-gradient(to right, var(--softCyan) 0%, var(--softCyan) ' + value + '%, var(--lightGrayishBlue1) ' + value + '%, var(--lightGrayishBlue1) 100%)';
};

init();