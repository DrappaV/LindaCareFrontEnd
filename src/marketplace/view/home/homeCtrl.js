import HomeView from "./home";
import * as marketService from '../../services/marketService'

class HomeController {

    constructor() {
        this.$view = new HomeView(this)
        let [route,urlParams]=window.location.hash.split("?");
        let urlSearchParams = new URLSearchParams(urlParams)
        this.$page=urlSearchParams.get("page") ? urlSearchParams.get("page") : 0
    }

    get viewContent(){
        return this.$view.$content
    }

    loadAndRenderData(){

        let me=this
        new Promise(async function (resolve, reject) {
            let response=await marketService.findAll(me.$page)
            resolve(response)
        })
        .then(model => this.$view.renderModel(model))
        .catch(error => {console.log(error);})
        ;

    }
}

export default HomeController