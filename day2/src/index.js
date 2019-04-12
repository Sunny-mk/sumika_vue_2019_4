

import Person from "./js/a";
import {sum,reverse as rev} from "./js/b";

console.log(new Person({name:"sunmk",age:24}).sayName())
console.log(sum(1,23,4,5),rev("abcdefg"))
import './css/style.css'
import './scss/style.scss'


function ajax(url){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open('GET',url,true);
        xhr.send();
        xhr.onload = () =>{
            if(xhr.status == 200){
                resolve(JSON.parse(xhr.responseText));
            }
        }
    });

}

ajax('/api/list').then((res)=>{
    console.log(res);
})