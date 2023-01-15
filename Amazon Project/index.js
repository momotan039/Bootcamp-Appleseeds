let imgs=document.querySelectorAll(".product-detials .detials .left .sticky .pictures img")
let mainImg=document.querySelector(".product-detials .detials .left .sticky .picture img")
imgs.forEach(img=>{
    img.addEventListener("mouseover",()=>{
        mainImg.src=img.src
    })
})
