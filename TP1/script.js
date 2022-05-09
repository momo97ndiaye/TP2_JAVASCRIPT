
const notif = document.getElementById('droite')
const buttons = document.querySelectorAll('button')

buttons.forEach(e=> {
    e.addEventListener('click',()=>{
       const box =create(e)
       notif.appendChild(box)
       setInterval(()=>{
           box.remove()
       },2000)
    })
});
function create(id) {
    var box = document.createElement('div')
    box.setAttribute('id','box')
    var prop = window.getComputedStyle(id,null)
    var color = prop.getPropertyValue('background-color')
    //box.setAttribute('style',`background-color: ${color}`)
    box.setAttribute('style',`background-color: ${color}`)
    return box
}