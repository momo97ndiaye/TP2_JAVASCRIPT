const col = document.getElementById('col')

const container = document.getElementById('container')

var tab = ["#faf3dd","#c8d5b9","#8fc0a9","#68b0ab","#4a7c59"]
let i =1
let nbr=0
const contenu = document.createElement('div')
contenu.innerHTML= `<main id="main"></i></i><div id="trash" class="trash" style="background-color: white">
    <p id="titre_trash">Corbeille</p> 
    <div class="trash-notes" id="trash_note">
    </div>
</div>
</main>
<div class="model">
<div class="modal" id="modal">
<div class="modal-titre">
    <p>NOUVELLE TACHE</p>
    <i class="fa-solid fa-xmark" id="delete"></i>
</div>
<div class="content">
    <p>Remplissez les informations de la nouvelle tache</p>
    <p>Tache</p>
    <textarea name="" id="textarea" cols="50" rows="10"></textarea><br>
    <p>Date</p>
    <input type="date" name="" id="date">
    <p>Heure Debut</p>
    <input type="time" name="" id="debut"> 
    <p>Heure Fin</p>
    <input type="time" name="" id="fin">
    <button type="submit" id="ajout">AJOUTER</button>            
</div>
</div></div>
<i class="fa-solid fa-trash" id="trash_btn">                            `
container.appendChild(contenu)
const trash_btn = document.getElementById('trash_btn')
trash_btn.addEventListener('click',()=>{
    main.classList.toggle('visible')
})

col.addEventListener('click',()=>{
    if(nbr<5){
        const main = document.getElementById('main')
        var colonne = document.createElement('div')
        var notes = document.createElement('div')
        notes.setAttribute('class',`notes`)
        notes.setAttribute('id',`note_id_${i}`)
        colonne.setAttribute('id',`col_id_${i}`)
        colonne.innerHTML=`<p id="para${i}"></p> `
        colonne.style.backgroundColor= tab[nbr]
        colonne.setAttribute('class',`cols`)
        colonne.appendChild(notes)
        main.appendChild(colonne)
        
        var all_notes = document.querySelectorAll('.une-note')
        all_notes.forEach(el => {
            if (el.parentElement.parentElement.nextSibling) {
                el.lastChild.style.visibility='visible'
            };
        });
    }
   


    const par = document.getElementById(`para${i}`)
    par.addEventListener('click',edit())
    function edit(){
        par.innerHTML=`<input id="edit${i}" value="Colonne "></input> <i class="fa-solid fa-xmark delete-btn" id="delete_col_${i}"></i>`
    }
    i++
    nbr++

    const delete_btn = document.querySelectorAll('.delete-btn')
    delete_btn.forEach(el => {
        el.addEventListener('click',()=>{
            if (main.childNodes.length>1&&el.id!=="delete_col_1") {
                el.parentElement.parentElement.remove()
                nbr =main.childNodes.length-2
            }
            var all_cols = document.querySelectorAll('.notes')
            var slidlength = all_cols[all_cols.length-1].querySelectorAll('.une-note')
            slidlength.forEach(el => {
                el.children[2].style.visibility='hidden';
                el.children[2].children[0].style.visibility='visible';
            });
        })
    });
})


const note = document.getElementById('note')
note.addEventListener('click',()=>{
    if (main.childNodes.length>2) {
        document.getElementsByClassName("model")[0].classList.add("active")
    }
})

const icone = document.getElementById('delete')
    icone.addEventListener('click',()=>{
        document.getElementsByClassName("model")[0].classList.remove("active")
    })

const ajout = document.getElementById('ajout')
ajout.addEventListener('click',()=>{
    const note_id_1 = document.getElementById('note_id_1')
    var une_note = document.createElement('div')
    une_note.setAttribute('class',`une-note`)
    
    var text = document.getElementById('textarea').value
    var date = document.getElementById('date').value
    var debut = document.getElementById('debut').value
    var fin = document.getElementById('fin').value

    var leftt = document.createElement("i")
    leftt.className="fa fa-angles-left"
    leftt.addEventListener("click",(e)=>{
        e.target.parentElement.parentElement.parentElement.previousSibling.lastChild.appendChild(e.target.parentElement)
        var all_notes = document.querySelectorAll('.une-note')
        all_notes.forEach(el => {
            if (el.parentElement.parentElement.previousSibling) {
                el.lastChild.style.visibility='visible'
            };
        });
        var all_cols = document.querySelectorAll('.notes')
        var slidlength = all_cols[all_cols.length-1].querySelectorAll('.une-note')
        slidlength.forEach(el => {
            el.children[2].style.visibility='hidden';
            el.children[2].children[0].style.visibility='visible';
        });
    })
    var rightt = document.createElement("i")
    rightt.className="fa fa-angles-right"
    rightt.innerHTML=`<i class="fa-solid fa-xmark" id="delete-task"></i><i class="fa-solid fa-window-restore" id="restore"></i>`
   
    rightt.addEventListener("click",(e)=>{
       e.target.parentElement.parentElement.parentElement.nextSibling.lastChild.appendChild(e.target.parentElement)
    })
    rightt.addEventListener('click',()=>{
        var all_cols = document.querySelectorAll('.notes')
        var slidlength = all_cols[all_cols.length-1].querySelectorAll('.une-note')
        slidlength.forEach(el => {
            el.children[2].style.visibility='hidden';
            el.children[2].children[0].style.visibility='visible';
        });
        
    })


    
 
    var dd = Date.parse(`${date} ${debut}`)
    var d = Date.parse(`${date} ${fin}`)
    var difheure = d-dd
    var now = Date.parse(new Date())
    var now1 = Date.parse(`${date}`)
    var difdate = now1-now+86400000

   


    if (difdate>=0 && difheure>=0 && text!=="") {
        note_id_1.appendChild(une_note)
    }else{
         if (text=="") {
             alert('veuillez saisir le nom de la tache')
         }
         if (date==""||fin==""||debut=="") {
            alert('veuillez saisir une heure et une date')
        }
         if (difdate<0 || difheure<0) {
             alert('heure ou date saisie non valide')
         }

    }
    var tache = document.createElement("div")
    tache.className="info"
    tache.innerHTML=` <h4>${text}</h4> <h5><p class="date">${date}</p> <p class="debut">${debut}</p> <p class="fin">${fin}</p></h5>`
    leftt.id="left"
    rightt.id="right"
    une_note.append(leftt,tache,rightt)

    setInterval(()=>{
        var all_notes = document.querySelectorAll('.une-note')
        all_notes.forEach(el => {
           var heuredebutsaisie = el.querySelector('.debut').innerText
           var heurefinsaisie = el.querySelector('.fin').innerText
           var datesaisie = el.querySelector('.date').innerText
           var today = new Date().getTime()
           var heuredebutf = Date.parse(datesaisie+" "+heuredebutsaisie)
           var heurefinf = Date.parse(datesaisie+" "+heurefinsaisie)
           var dif_final = heuredebutf-today
            if (dif_final<=0) {
                el.style.backgroundColor="green"
            }
           var dif_final1 = heurefinf-today
            if (dif_final1<=0) {
                el.style.backgroundColor="grey"
            }
            });
    },1000);
   
    

    document.getElementsByClassName("model")[0].classList.remove("active")
    viderForm()
  
    const les_notes =document.querySelectorAll('.une-note')
    les_notes.forEach(e => {
        e.addEventListener('dblclick',()=>{
            //alert("ok")
            document.getElementsByClassName("model")[0].classList.add("active") 
        })
    });
    const delete_task = document.querySelectorAll('#delete-task')
    delete_task.forEach(el => {
        el.addEventListener('click',(e)=>{
            const trash_note = document.getElementById('trash_note')
            trash_note.appendChild(e.target.parentElement.parentElement);
        })
    });
    const restore_task = document.querySelectorAll('#restore')
    restore_task.forEach(el => {
        el.addEventListener('click',(e)=>{
            const restore_note = document.getElementById('note_id_1')
            restore_note.appendChild(e.target.parentElement.parentElement);
        })
    });
})

function viderForm() {
    document.getElementById('textarea').value=''
    document.getElementById('date').value=''
    document.getElementById('debut').value=''
    document.getElementById('fin').value=''
}

/* const compteur = () => {
    const coumpteurDate = new Date("December 31, 2022 00:00:00").getTime();
    const maintenant = new Date().getTime();
    const dif = maintenant-coumpteurDate;

    const seconde = 1000;
    const minute = seconde * 60;
    const heure = minute * 60;
    const jour = heure * 24;

    const textjour = Math.floor(dif / jour);
    const textheure = Math.floor((dif % jour) / heure);
    const textminute = Math.floor((dif % heure) / minute);
    const textseconde = Math.floor((dif % minute) / seconde);

    document.querySelector(".jour").innerText =textjour;
    document.querySelector(".heure").innerText = "0"+textheure;
    document.querySelector(".minute").innerText = "0"+textminute;
    document.querySelector(".seconde").innerText ="0"+textseconde;
};
setInterval(compteur, 1000); */