
    // window.addEventListener("mousemove", (e)=> {
    // cursor1.style.top = e.pageY + "px";
    // cursor1.style.left = e.pageX + "px";

    // mouse2.style.top = e.pageY + "px";
    // mouse2.style.left = e.pageX + "px";

    // mouse3.style.top = e.pageY + "px";
    // mouse3.style.left = e.pageX + "px";

    // })


 const mouses = document.querySelectorAll(".mouse");


 window.addEventListener("mousemove", (e) => {
 mouses.forEach((mouse) => {
     mouse.style.top = e.pageY + "px";
     mouse.style.left = e.pageX + "px";
   });
 });