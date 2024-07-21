let doc = document.querySelector('div');
// console.log(doc.querySelectorAll('h3')[0].innerText)
// console.log(doc.querySelectorAll('h3')[0].nextElementSibling.querySelectorAll('ol>li')[0].children[0].children[0].innerHTML)
// console.log(doc.querySelectorAll('h3')[0].nextElementSibling.querySelectorAll('ol>li')[0].children[0].children[0].nextSibling.data)
// console.log(doc.querySelectorAll('h3')[0].nextElementSibling.querySelectorAll('ol>li')[0].children[1].children[0].children[0].innerText)
// console.log(doc.querySelectorAll('h3')[0].nextElementSibling.querySelectorAll('ol>li')[0].children[1].children[0].children[0].nextSibling.data)
// console.log(doc.querySelectorAll('h3')[0].nextElementSibling.querySelectorAll('ol>li')[0].children[1].children[1].children[0].innerText)
// console.log(doc.querySelectorAll('h3')[0].nextElementSibling.querySelectorAll('ol>li')[0].children[1].children[1].children[0].nextSibling.data)
// console.log(doc.querySelectorAll('h3')[0].nextElementSibling.querySelectorAll('ol>li')[0].children[1].children[2].children[0].innerText)
// console.log(doc.querySelectorAll('h3')[0].nextElementSibling.querySelectorAll('ol>li')[0].children[1].children[2].children[0].nextSibling.data)
let str;
str = `[{"string":"categories","categories":[`
for(let i=0; i< doc.querySelectorAll('h3')['length'];i++){
    str += `{"name":"`+doc.querySelectorAll('h3')[i].innerText+`","sub_categories":[`;
    for(let j=0;j<doc.querySelectorAll('h3')[i].nextElementSibling.querySelectorAll('ol>li')['length'];j++){
        str+=`{"name":"`+doc.querySelectorAll('h3')[i].nextElementSibling.querySelectorAll('ol>li')[j].querySelector('p>strong').innerText+`","para":"`+doc.querySelectorAll('h3')[i].nextElementSibling.querySelectorAll('ol>li')[j].querySelector('li>p').childNodes[1].data.toString()+`","plant":[`
        for(let k=0;k<3;k++){
            str += `{"name":"`+doc.querySelectorAll('h3')[i].nextElementSibling.querySelectorAll('ol>li')[j].querySelectorAll('ul>li>em')[k].innerText+`","para":"`+doc.querySelectorAll('h3')[i].nextElementSibling.querySelectorAll('ol>li')[j].querySelectorAll('ul>li')[k].childNodes[1].data.toString();
            if(k == 2){
                str += `"}`;
            }
            else{
                str+=`"},`;
            }
        }
        if( j == (doc.querySelectorAll('h3')[i].nextElementSibling.querySelectorAll('ol>li')['length'])-1){
            str+=`]}`;
        }
        else{
            str+=`]},`;
        }
    }
    str+=`]},`
}
str+=`]}]`;
console.log(str);