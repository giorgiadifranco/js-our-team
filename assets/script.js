//console.log('it works');


const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];
//recupero la row del markup con querySelector
let rowEl = document.querySelector('.row')
//creo un ciclo for per inserire gli oggetti nel markup
for (let i = 0 ; i < teamMembers.length; i++){
    //salvo il singolo elemento di un array in una variabile
    let  member = teamMembers[i];

    //destrutturo l'oggetto per estrarre il valore e poi inserirlo nel markup

    let {name, role, email, img} = member;

    //console.log(member);

    let markup =  `
                  <div class="card bg-dark p-2 d-flex flex-sm-row w-80 ">
                    <div class="col-sm-3 col-lg-2">
                      <img  class="w-100" src="${img}" alt="">
                    </div>
                  
                    
                    <div class="col-sm-9 col-lg-4 g-5 p-2">
                        <h3 class="text-white p-1 py-2">${name}</h3>
                        <p class="text-white p-1">${role}</p>
                        <p class="text-primary p-1">${email}</p>
                    </div>
                  </div>`
  
  //all'interno del ciclo modifico la row unendo il markup tramite innerHTML

  rowEl.innerHTML += markup
        
}