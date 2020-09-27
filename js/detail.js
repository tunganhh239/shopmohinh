window.onload=init;
function init(){
    var image= document.getElementsByClassName("product-anh");
    for(var i=0; i<image.length; i++){
        image[i].onclick=showAnh;
    }
    console.log("lalalalal");
}

function showAnh(e){
    var image=e.target;
    var name= image.src;
    
    console.log(name);
    var target= document.getElementById("product-show");
    target.src=name;
}