const listAll = document.querySelectorAll(".list");
const imgBox = document.querySelectorAll('.img-box');

///// for lop and change active clss ul li 
for(let i = 0 ; i < listAll.length ; i++){
      listAll[i].addEventListener("click",function(){
           for(let j = 0 ; j <listAll.length ; j++ ){
               listAll[j].classList.remove("active");
           }
           listAll[i].classList.add("active");
           let listName = listAll[i].getAttribute('data-filter');
           imgBox.forEach((image)=>{
               let imageFilter = image.getAttribute("data-tiem");
                  if((imageFilter == listName)|| listName == "all"){
                      image.classList.remove("hide");
                      image.classList.add("Show")
                  }else{
                      image.classList.remove("Show");
                      image.classList.add("hide")
                  }
           })
      })
}


//// show light box

const lightBox = document.querySelector(".lightbox");
const fullviewImg = document.querySelector(".image img");
const allImgboxsrc  = document.querySelectorAll("#imgall");
const closeLighibox  = document.querySelector(".close"),
     dowloadOption =  document.querySelector(".download");

for(let i = 0 ; i < allImgboxsrc.length ; i++){
    allImgboxsrc[i].addEventListener("click",function(e){
        e.preventDefault();
        lightBox.classList.add("showLightbox");
        let srcimg = allImgboxsrc[i].src;
        fullviewImg.src = allImgboxsrc[i].src;
        dowloadOption.href = srcimg ;
         closeLighibox.addEventListener("click",function(){
        lightBox.classList.remove("showLightbox");
        });
    });

}