import homeTemplateString from './homeTemplate.html'
import PaginationInfo from "../pagination/PaginationInfo";
import * as paginationRenderer from '../../render/PaginationRenderer'
let homeTemplate = document.createElement('template')
homeTemplate.innerHTML = homeTemplateString

class HomeView {
    constructor() {
        this.$content = document.importNode(homeTemplate.content, true)
        this.$table=this.$content.querySelector("table")
        this.$tableBody=this.$table.querySelector("tbody")
    }

    get content(){
        return this.$content
    }


    renderModel(marketModelJson){
        this.$tableBody.innerHTML=''
        if(this.isInvalidJsonMarketModel(marketModelJson)){
            this.$tableBody.innerHTML='Data Rendering Error...'
        }
        else {
            this.renderMarketModels(marketModelJson)
            this.renderPagination(marketModelJson)
        }

    }

    isInvalidJsonMarketModel(marketModelJson){
       return !marketModelJson ||
              !marketModelJson.content
    }

    renderMarketModels(marketModelJson){
        let html=''
        marketModelJson.content.forEach(c => html+=this.renderMarketModel(c))
        this.$tableBody.insertAdjacentHTML('beforeend',html);
    }

    renderMarketModel(model){
        return `<tr>
                    <th scope="row">${model.id}</th>
                    <td>${model.userId}</td>
                    <td>${model.currencyFrom}</td>
                    <td>${model.currencyTo}</td>
                     <td>${model.amountSell}</td>
                    <td>${model.amountBuy}</td>
                    <td>${model.rate}</td>
                    <td>${model.timePlaced.substring(0, 10) + " " + model.timePlaced.substring(11, 19)}</td>
                    <td>${model.originatingCountry}</td>
                </tr>`
    }

    renderPagination(marketModelJson) {
        let pgInfo=new PaginationInfo();
        pgInfo.baseUrl="#home?"
        pgInfo.isFirst=marketModelJson.first
        pgInfo.isLast=marketModelJson.last
        pgInfo.currentPage=marketModelJson.number
        pgInfo.totalPage=marketModelJson.totalPages
        this.$table.insertAdjacentHTML('afterend',paginationRenderer.render(pgInfo));
    }
}

export default HomeView