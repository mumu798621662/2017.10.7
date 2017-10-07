window.onload=function(){
 let hengxian2 = document.querySelectorAll('.hengxian2');
 let li = document.querySelectorAll('.li');
 console.log(li)
 for (let i=0;i<li.length;i++){
     for(let j=0;j<hengxian2.length;j++){
         li[i].onmouseover=function(){
             hengxian2[j].style.display='block'
         }
         li[i].onmouseout=function(){
             hengxian2[j].style.display='none'
         }
     }

 }




}