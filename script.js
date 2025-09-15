const countriesandflags =()=>{
    const card = document.querySelector(".row")
    const url = "https://countriesnow.space/api/v0.1/countries/flag/images"


    const methods = {
        method : 'GET'
    }

    let carddata = "";
    fetch(url, methods)
    .then(response => response.json())
  .then(result => {
   console.log(result)
   localStorage.setItem("countries", JSON.stringify(result.data))
   result.data.map((item, index) =>{
    carddata += `
    <div class="col mt-5"  key=${index}>
    <div class="card">
    <div class="card-body">
    <p> country Name: ${item.name}</p>
    <p> <img src="${item.flag}" alt="" width=50></p>
    <p> country ISO2: ${item.iso2}</p>
    <p> country ISO3: ${item.iso3}</p>
    </div>
    </div>
    </div>
    `
    card.innerHTML = carddata;
   });

})
  .catch(error => console.log('error', error));
}
countriesandflags();