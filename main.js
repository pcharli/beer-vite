import beersList from './components/beers'
import './scss/style.scss'
import './style.css'

const sidebar = document.querySelector('.sidebar')

beersList(15)
  .then(beers => {
    let template = `<ol class="beersList">`
    let abv = 0
    let nbBeers = beers.length
    beers.forEach(beer => {
      template += `<li class="beersItem">${beer.name} - ${beer.abv}°</li>`
      abv += beer.abv
    })
    template += '</ol>'
    template += `<p>Le taux moyen est de ${(abv/nbBeers).toFixed(2)}°</p>`
    sidebar.insertAdjacentHTML('beforeend',template)
  })
  .catch(err => console.log(err))


