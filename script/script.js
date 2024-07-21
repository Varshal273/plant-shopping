// var count=0;
// var topvalue=715;
// document.addEventListener('keydown', function(event) {
//     if(count <= 0){
//         count = 0;
//     }
//     console.log(count);
//     if(count < 5){
//         if (event.code === 'Space') {
//             event.preventDefault();
//             if (count == 3) {
//                 topvalue = 266;
//             }
//             else if (count == 2) {
//                 topvalue = 396;
//             }
//             else if(count == 1){
//                 topvalue = 413;
//             }
//             else if(count == 0){
//                 topvalue = 715;
//             }
//             count++;
//             window.scrollBy({
//                 top: topvalue,
//                 left: 0,
//                 behavior: 'smooth'
//             });
//         }
//     }
//     if(count > 1){
//         if (event.shiftKey && event.code === 'Space') {
//             event.preventDefault();
//             count--;
//             if (count == 4) {
//                 topvalue = -212;
//             }
//             if (count == 3) {
//                 topvalue = -396;
//             }
//             else if(count == 2){
//                 topvalue = -413;
//             }
//             else if(count == 1){
//                 topvalue = -715;
//             }
//             count--;
//             window.scrollBy({
//                 top: topvalue,
//                 left: 0,
//                 behavior: 'smooth'
//             });
//         }
//     }
//     if (event.code === 'ArrowRight'){
//         let doc = document.getElementById('next');
//         event.preventDefault();
//         doc.click();
//     }
//     if (event.code === 'ArrowLeft'){
//         let doc = document.getElementById('prev');
//         event.preventDefault();
//         doc.click();
//     }
//     if (event.altKey && event.code === 'KeyH') {
//         let doc = document.getElementById('linkh');
//         doc.click();
//     }
//     if (event.altKey && event.code === 'KeyL') {
//         let doc = document.getElementById('linkl');
//         doc.click();
//     }
//     if (event.altKey && event.code === 'KeyS') {
//         let doc = document.getElementById('links');
//         doc.click();
//     }
// });
function loading(){
    let doc = document.querySelector('.loader-container');
    doc.style.opacity = '0';
    document.getElementById(loading_a[0]).parentElement.style.display = 'block';
    document.getElementById(loading_a[0]).style.visibility = 'visible';
    document.getElementById(loading_a[1]).parentElement.style.display = 'block';
    document.getElementById(loading_a[1]).style.visibility = 'visible';
    document.getElementById(loading_a[2]).parentElement.style.display = 'block';
    document.getElementById(loading_a[2]).style.visibility = 'visible';
    document.getElementById(loading_a[3]).parentElement.style.display = 'block';
    document.getElementById(loading_a[3]).style.visibility = 'visible';
}
function start_load(){
    let doc = document.querySelector('.loader-container');
    doc.style.opacity = '1';
    doc.style.display = 'block';
}
function loading_display(){
    let doc = document.querySelector('.loader-container');
    doc.style.display = 'none';
}

var count =0;
let loading_a = [] ;
function loaded(a = 'done'){
    loading_a[count] = a;
    console.log("load",count,a);
    count++;
    if(count >= 4 | a == 'plant_body' | a == 'buy_body'){
        console.log("loading");
        setTimeout(() => {
            loading();
        }, 1900);
        setTimeout(() => {
            loading_display();
        }, 2100);
    }
    document.getElementById(a).style.visibility = 'hidden';
    document.getElementById(a).parentElement.style.display = 'none';
}
function plant_loaded(a){
    setTimeout(() => {

        count = 4;
        loaded();
    }, 1000);
}