// const precioOriginal = 120;
// const descuento = 18;

// function calcularPrecioConDescuento(precio, descuento) {
//     const porcentajePrecioConDescuento = 100 - descuento;
//     const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

//     return precioConDescuento;
// }
// function onClickButtonPriceDiscount() {
//     const inputPrice = document.getElementById("inputPrice");
//     const priceValue = inputPrice.value;

//     const inputDiscount = document.getElementById("inputDiscount");
//     const discountValue = inputDiscount.value;

//     const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

//     const ResultP = document.getElementById("ResultP");
//     ResultP.innerText = "El precio con descuento es: $" + precioConDescuento;
// }


// console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    preioConDescuento
// })
const coupons = [
    "Marcos-Ditroy-EsArnold",
    "Pero-no-le-digas-a-nadie",
    "Es-un-secreto"
];

// const inputCoupon = document.getElementById("InputCoupon");
// const couponValue = inputCoupon.value;

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
  
    let descuento;
  
    switch(couponValue) {
      case coupons[0]: // "JuanDC_es_Batman"
        descuento = 15;
      break;
      case coupons[1]: // "pero_no_le_digas_a_nadie"
        descuento = 30;
        break;
        case coupons[2]: // "es_un_secreto"
          descuento = 25;
        break;
      }
      const precioConDescuento = calcularPrecioConDescuento(priceValue, couponValue);

      const resultP = document.getElementById("ResultP");
      resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }