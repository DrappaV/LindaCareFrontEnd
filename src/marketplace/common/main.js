import Router from './router'
import './controller'

let target = '#home'

if (window.location.hash)
    target = window.location.hash

Router.navigate(target)