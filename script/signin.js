console.log('signup?');
var lbl = document.getElementById('result');
var str = '';
var label = document.getElementsByClassName('label_3');
var valid = [];
// let vld = reg.test(document.formfill.Username.value);
function user_validation(){
    let reg = /[A-Z]*[0-9]/;
    if(document.formfill.Username.value == ''){
        str = 'Enter UserName';
        label[0].style.background = 'red';
        incorrect(0);
        document.getElementById('user_label').innerHTML = 'user123';
    }
    else if(!reg.test(document.formfill.Username.value)){
        str =  'username : abc123'
        label[0].style.background = 'orange';
        incorrect(0);
        document.getElementById('user_label').innerHTML = 'user123';
    }
    else if(reg.test(document.formfill.Username.value)){
        str =  'username : Correct'
        label[0].style.background = 'white';
        correct(0);
        document.getElementById('user_label').innerHTML = document.formfill.Username.value;
    }
    else{
        str += '';
    }
    lbl.innerHTML = str;
}
function email_validation(){
    if(document.formfill.Email.value == ''){
        str = 'Enter E-mail';
        label[1].style.background = 'red';
        incorrect(1);
    }
    else{
        label[1].style.background = 'white';
        str = 'E-mail:user123@gmail.com';
        correct(1);
    }
    lbl.innerHTML = str;
}
function password_validation(){
    let reg = /[A-Za-z]{1,6}[0-9]{1,6}[\@\#\$\%\&\*]{1,20}/;
    if(document.formfill.Password.value == ''){
        str = 'Enter Password';
        label[2].style.background = 'red';
        incorrect(2);
    }
    else if(!reg.test(document.formfill.Password.value)){
        str = 'password : abc159@#$*';
        label[2].style.background = 'orange';
        incorrect(2);
    }
    else if((reg.test(document.formfill.Password.value) & (document.formfill.Password.value.length >= 8))){
        str = 'correct format';
        label[2].style.background = 'white';
        correct(2);
    }
    else{
        str += '';
    }
    lbl.innerHTML = str;
}
function confirm_password_validation(){
    if(document.formfill.Password.value == ''){
        str = 'Enter Password First';
        label[2].style.background = 'red';
        incorrect(2);
    }
    else if(document.formfill.Confirm_Password.value == ''){
        str = 'Confirm Password';
        label[3].style.background = 'orange';
        incorrect(3);
    }
    else if(document.formfill.Confirm_Password.value != document.formfill.Password.value){
        str = 'Confirm Password : Not correct';
        label[3].style.background = 'red';
        incorrect(3);
    }
    else if(document.formfill.Confirm_Password.value === document.formfill.Password.value){
        str = 'Confirm Password : Correct';
        label[3].style.background = 'white';
        correct(3);
    }
    lbl.innerHTML = str;
}
function checkbox_validation(){
    if(document.formfill.remember_me.checked){
        label[4].style.background = 'white';
        str = 'You Sign Terms and Condition';
        correct(4);
        timer();
    }
    else if(!document.formfill.remember_me.checked){
        label[4].style.background = 'red';
        incorrect(4);
        str = 'Apply Terms and Condition'
    }
    lbl.innerHTML = str;
}
function correct(vld){
    valid[vld] = true;
    lbl.style.color = 'white';
    submit_validate();
    timer();
}
function incorrect(vld){
    valid[vld] = false;
    lbl.style.color = '#f96363d8';
    submit_validate();
}
function timer(){
    setTimeout(()=>{
        lbl.innerHTML = '';
        lbl.style.color = '#f96363d8';
    },1000);
}
function submit_validate(){
    if(valid[0] & valid[1] & valid[2] & valid[3] & valid[4]){
        console.log('valid');
        document.formfill.submit.disabled = false;
    }
    else{
        console.log('invalid');
        document.formfill.submit.disabled = true;
    }
}