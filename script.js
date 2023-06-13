var IndexValue = 1;
showImg(IndexValue);
function btn_slide(e){showImg(IndexValue = e);}
function showImg(e){
      var i;
      const img=document.querySelectorAll('img');
      const sliders=document.querySelectorAll('.btn-sliders button');
      if(e>img.length){IndexValue=1}
      if(e<1){IndexValue=img.length}
      for(i=0;i<img.length;i++){
        img[i].style.display="none";
      }
      img[IndexValue-1].style.display="block";
}
setTimeout(change,3000);

function change(){

}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})
function LMode()
            {
                window.location.assign("index.html");
            }
function Dark()
            {
                window.location.assign("light_mode.html");
            }
function onclickmenu(){
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
}
function email(){
    window.location.assign("https://accounts.google.com/");
}


