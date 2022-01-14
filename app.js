let inputF = document.querySelector('#inputF')
let button = document.querySelector('#search')
const regions = ["africa","asia","americas","europe","oceania"]


button.addEventListener('click', getData)

function getData(e){
	e.preventDefault()
	requestApi(inputF.value)
}

function requestApi(inputValue){
	var searchByRegion = false;
	var api = "";
	for (var i = 0 ; i < regions.length ; i++) {
		if (inputValue == regions[i]){
			searchByRegion = true;
		}
	}
	if(searchByRegion)
		api = `https://restcountries.com/v3.1/region/${inputValue}`
	else 
		api = `https://restcountries.com/v3.1/name/${inputValue}`

	fetch(api)
	.then((response) => response.json())
	.then((data) => {
		let result = ''
		data.forEach(function(country){
			result += 
			`
			<div class="col-3 card bg-light mb-3" id="cards" style="width: 18rem;"  >
				<img class="card-img-top" src="${country.flags.png}" alt="card image cap" >
					<div class="card-body text-dark">
					<h4 class="card-title text-primary">${country.name.common}</h4>
					<h6 class="card-title">Capital : ${country.capital}</h6>
					<p class="card-text text-secondary">Located in ${country.subregion}</strong>, it Has a population of  ${country.population}</p>
					</div>
				</div>
			</div>
			`
		})
		document.querySelector("#container").innerHTML = result;
	})
}
// let nav = document.querySelector("#navbar")
// let container = document.querySelector("#container")

// addEventListener("mousemove",changeColor)

// function changeColor(e){
// 	nav.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},100)`
// }
