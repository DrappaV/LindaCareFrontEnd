class Router  {

    constructor(pathMappings) {
        this.pathMappings = pathMappings

        window.onhashchange = (event) => {

            let url=window.location.hash.split("?")
            let target = url[0]
            let targetFunc = this.pathMappings[target]
            if (targetFunc)
                targetFunc.call(this,event.data)
            else
                console.log(this.pathMappings[target] + " function does not exists")
        }
    }

    static navigate (path, data) {
        let event = new CustomEvent('hashchange')
        event.data = data
        event.oldURL = location.hash
        event.newURL = location.href.split('#')[0] + path
        if(event.oldURL != path)
            history.pushState(null,null,path)
        dispatchEvent(event)
    }
}

export default Router
