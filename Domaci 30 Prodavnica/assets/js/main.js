const URL = 'https://my-json-server.typicode.com/codeedu2020/api/';


document.querySelector("#pretraga").addEventListener("keyup", filterChange);
document.querySelector("#rang").addEventListener("change", filterChange);
document.querySelector("#sort").addEventListener("change", filterChange);
document.querySelector("#reset").addEventListener("click",reset);
let states = document.querySelectorAll(".stanje");
states.forEach(elem => {

    elem.addEventListener("change", filterChange)
});




function filterChange() {


    getData("knjige", renderBooks);
    getData("pisci", renderWriter);
    getData("zanrovi", rednerGenre);
}



//preuzimannje

function getData(endpoint, callback) {


    fetch(URL + endpoint).
        then(res => res.json()).
        then(res => {

            callback(res);

        }).
        catch(e => console.log(e))
}







function init() {

    getData("pisci", renderWriter);
    getData("zanrovi", rednerGenre);
    getData("knjige", renderBooks);
}






function renderBooks(data) {
    
    data = filterWriter(data);
    data = filterGenre(data);
    data = filterPrice(data);
    data = filterState(data);
    data = filterSearch(data);
    data = sortPrice(data);
    sessionStorage.setItem(`filter`,JSON.stringify(data));
    let html = '';


    if (data.length == 0) {

        html = `<p class="text-danger">Nema rezultata pretrage</p>`;
    } else {

        for (let i = 0; i < data.length; i++) {

            html += `<div class="col-lg-4 col-md-6 mb-4">
    
    <div class="card h-100">
    <img src='./assets/img/${data[i].slika.src}' alt='./assets/img/${data[i].slika.alt}' class="card-img-top">
    <div class="card-body">
    
    <h3 class="card-title">${data[i].naslov}</h3>
    <p class="card-text">${getWriter(data[i].pisacID)}</p>
    <p class="card-text">${getGenres(data[i].zanrovi)}</p>
    <p class="card-text ${data[i].naStanju ? 'text-success' : 'text-danger'}">
    ${data[i].naStanju ? "In stock" : "Out of stock"}
    </p>
    <p class="card-text text-decoration-line-through text-secondary"><s>Old price: ${data[i].price.staraCena}EUR</s></p>
    <p class="card-text text-primary">New price: ${data[i].price.novaCena}EUR</p>
    <div class="text-center">
    <button  class="btn btn-primary">Add to cart</button>
    </div>
    </div>
    </div>
    </div>`
        }
    }
    document.querySelector("#knjige").innerHTML = html;
}


function renderWriter(data) {
    sessionStorage.setItem("pisci", JSON.stringify(data));

    const writer = document.querySelector("#pisci");
    let writerChecked=[];
    if(JSON.parse(sessionStorage.getItem(`writerChecked`))!=null){
        writerChecked=JSON.parse(sessionStorage.getItem(`writerChecked`));
    }
    
    let html = ``;

    data.forEach(element => {

        html += `<li class="list-group-item">
    <input type="checkbox" value="${element.id}" class="pisac" name="pisci" ${writerChecked.includes(parseInt(element.id))?`checked`:``}/><span>${element.ime} ${element.prezime} (${counter(element.id)})</span> 
 </li>`;
 
 
    });
    
    
    writer.innerHTML = html;
    
    let writers = document.querySelectorAll(".pisac");
    
    writers.forEach(elem => {
        
        // elem.addEventListener("change", filterChange);
        elem.addEventListener(`change`,writerChange);
        function writerChange(){
            let array=[];
            document.querySelectorAll(`.pisac`).forEach(e=>{
                if(e.checked){
                    if(JSON.parse(sessionStorage.getItem(`writerChecked`))!=null){

                        array=JSON.parse(sessionStorage.getItem(`writerChecked`));
                    }
                    array.push(parseInt(e.value));
                    sessionStorage.setItem(`writerChecked`,JSON.stringify(array));
                    filterChange()
                }else{
                    if(JSON.parse(sessionStorage.getItem(`writerChecked`))!=null){

                        array=JSON.parse(sessionStorage.getItem(`writerChecked`));
                    }
                    if(array.includes(parseInt(e.value))){
                        array.splice(array.indexOf(parseInt(e.value)),1);
                        sessionStorage.setItem(`writerChecked`,JSON.stringify(array));
                    }
                    filterChange()
                }
            })
        }
    })
    
    
    
}


function getGenres(array) {
    
    
    let genres = JSON.parse(sessionStorage.getItem("zanrovi"));
    
    let html = "";
    
    let newGenre = genres.filter(elem => array.includes(elem.id));


    newGenre.forEach((elem, i) => {

        html += elem.naziv;
        if (newGenre.length - 1 != i) {

            html += ', ';

        }
    })

    return html;


}


function getWriter(id) {


    let writers = JSON.parse(sessionStorage.getItem("pisci"));


    let obj = writers.filter(elem => elem.id == id)[0];


    return obj.ime + " " + obj.prezime;



}

function rednerGenre(data) {

    sessionStorage.setItem("zanrovi", JSON.stringify(data));

    const genre = document.querySelector("#zanrovi");
    let genreChecked=[];
    if(JSON.parse(sessionStorage.getItem(`genreChecked`))!=null){
        genreChecked=JSON.parse(sessionStorage.getItem(`genreChecked`));
    }

    let html = '';


    data.forEach(element => {

        html += `<li class="list-group-item">
        <input type="checkbox" value="${element.id}" class="zanr" name="zanrovi" ${genreChecked.includes(parseInt(element.id))?`checked`:``} /> <span>${element.naziv} (${counter2(element.id)})</span>
     </li>`;
    });

    genre.innerHTML = html;

    let genres = document.querySelectorAll(".zanr");
    
    genres.forEach(elem => {

        // elem.addEventListener("change", filterChange);
        elem.addEventListener(`change`,genreChange);
        function genreChange(){
            let array=[];
            document.querySelectorAll(`.zanr`).forEach(e=>{
                if(e.checked){
                    if(JSON.parse(sessionStorage.getItem(`genreChecked`))!=null){

                        array=JSON.parse(sessionStorage.getItem(`genreChecked`));
                    }
                    array.push(parseInt(e.value));
                    sessionStorage.setItem(`genreChecked`,JSON.stringify(array));
                    filterChange()
                }else{
                    if(JSON.parse(sessionStorage.getItem(`genreChecked`))!=null){

                        array=JSON.parse(sessionStorage.getItem(`genreChecked`));
                    }
                    if(array.includes(parseInt(e.value))){
                        array.splice(array.indexOf(parseInt(e.value)),1);
                        sessionStorage.setItem(`genreChecked`,JSON.stringify(array));
                    }
                    filterChange()
                }
            })
        }
    })

}



init();


//filteri


function filterSearch(data) {

    let word = document.querySelector("#pretraga").value;

    if (word) {


        return data.filter(elem => elem.naslov.toLowerCase().indexOf(word.trim().toLowerCase()) > -1)

    }

    return data;

}

function filterPrice(data) {


    let price = document.querySelector("#rang").value;

    document.querySelector("#rez").textContent = price + " EUR";


    return data.filter(elem => parseInt(elem.price.novaCena) <= parseInt(price));


}


function filterState(data) {


    let radio = document.querySelector(".stanje:checked");

    if (radio.value == "dostupno") {

        return data.filter(elem => elem.naStanju)
    } else if (radio.value == "nedostupno") {
        return data.filter(elem => !elem.naStanju)
    } else {

        return data;
    }



}

function filterGenre(data) {  //niz  knjiga       zanrovi:[5,4,3]

    let cheks = document.querySelectorAll(".zanr");

    let array = [];
    cheks.forEach(elem => {


        if (elem.checked) {

            array.push(parseInt(elem.value));
        }
    })

    if (array.length > 0) {


        return data.filter(elem => elem.zanrovi.some(el => array.includes(el)));

    } else {

        return data;

    }






}


function filterWriter(data) {

    let cheks = document.querySelectorAll(".pisac");

    let array = []

    cheks.forEach(elem => {


        if (elem.checked) {

            array.push(parseInt(elem.value));

        }
    })

    if (array.length > 0) {


        return data.filter(elem => array.includes(parseInt(elem.pisacID)));

    } else {

        return data;

    }

}

function sortPrice(data) {

    let method = document.querySelector("#sort").value;

    if (method == "asc") {

        return data.sort((a, b) => {


            if (parseInt(a.price.novaCena) > parseInt(b.price.novaCena)) {
                return 1;
            }

            if (parseInt(a.price.novaCena) < parseInt(b.price.novaCena)) {
                return -1;
            }

            if (parseInt(a.price.novaCena) == parseInt(b.price.novaCena)) {
                return 0;
            }

        })


    }
    else if (method == "desc") {

        return data.sort((a, b) => {


            if (parseInt(a.price.novaCena) < parseInt(b.price.novaCena)) {
                return 1;
            }

            if (parseInt(a.price.novaCena) > parseInt(b.price.novaCena)) {
                return -1;
            }

            if (parseInt(a.price.novaCena) == parseInt(b.price.novaCena)) {
                return 0;
            }

        })


    } else {

        return data;
    }





}

//resetovanje svih filtera

function reset(){


    let checkcZ=document.querySelectorAll(".zanr");

    checkcZ.forEach(elem=>{

        elem.checked=false;
    })


    let  checkcP=document.querySelectorAll(".pisac");

    checkcP.forEach(elem=>{

        elem.checked=false;
    })



    document.querySelector("#pretraga").value="";
    document.querySelector("#sort").selectedIndex=0;
    let states=document.querySelectorAll(".stanje");
    states.forEach(elem=>{


          if (elem.value=="sve"){

            elem.checked=true;
          }

    })
    document.querySelector("#rang").value=1000;
    document.querySelector("#rez").textContent="";
    sessionStorage.clear(`genreChecked`);
    sessionStorage.clear(`writerChecked`)

    filterChange();
}
//counter
function counter(id){
   return JSON.parse(sessionStorage.getItem(`filter`)).filter(e=>e.pisacID==id).length
}
function counter2(id){
    return JSON.parse(sessionStorage.getItem(`filter`)).filter(e=>e.zanrovi.includes(id)).length
 }
