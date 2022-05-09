const container = document.querySelector('.container')
const image = document.querySelectorAll('img')

image.forEach(el => {
  container.addEventListener('mousemove',(e)=>{
    const x = e.clientX - e.target.offsetLeft
    const y = e.clientY - e.target.offsetTop
  
    console.log(x,y)
    el.style.transformOrigin = `${x}px ${y}px`
    el.style.transform = "scale(2)"
  })
});
image.forEach(el => {
  container.addEventListener('mouseleave',()=>{
    el.style.transformOrigin = "center"
    el.style.transform = "scale(1)"
  })
});

var index = 0;

show_slide = (i) => {
  //increment/decrement slide index
  index += i;

  //grab all the images
  var images = document.getElementsByClassName("image");
  //grab all the dots
  var dots = document.getElementsByClassName("dot");

  // hide all the images
  for (i = 0; i < images.length; i++) 
    images[i].style.display = "none";
  
  // remove the active class from the dot
  for (i = 0; i < dots.length; i++) 
    dots[i].className = dots[i].className.replace(" active", "");
  
  // if index is greater than the amount of images (set it to zero)
  if (index > images.length - 1) 
    index = 0 ;
  
  // if index is less than zero (set it to the length of images)
  if (index < 0)
    index = images.length - 1;

  // only display the image that's next or previous
  images[index].style.display = "block";
  // only make the current dot active
  dots[index].className += " active";

}

window.addEventListener("onload", show_slide(index));
