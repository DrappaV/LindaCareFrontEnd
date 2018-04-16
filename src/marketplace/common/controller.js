import Router from './router'
import 'whatwg-fetch'
import HomeController from "../view/home/homeCtrl";

let $app = document.querySelector('main')

let $publicPathMapping={
    '#home': function() {
        let homeCtrl = new HomeController()
        $app.innerHTML=''
        $app.appendChild(homeCtrl.viewContent)
        homeCtrl.loadAndRenderData()
    }
}
export default new Router($publicPathMapping)

