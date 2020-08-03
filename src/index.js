import './style.less'
import './y.styl'
import jpg from './1.jpg'

const container = document.getElementById('img-container')
container.innerHTML = `
    <img src = "${jpg}">
`
const loadButton = document.querySelector('#load')
loadButton.onclick = () => {
    const promise = import('./console.js')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => { })
}