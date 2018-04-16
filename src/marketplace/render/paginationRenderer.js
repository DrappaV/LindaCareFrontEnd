export function render(paginationInfo){
    let href=`${paginationInfo.baseUrl}`
    return `<nav aria-label="navigation">
                <ul class="pagination">
                ${renderPrevious(href,paginationInfo.isFirst,paginationInfo.currentPage)}
                ${renderPages(href,paginationInfo.currentPage,paginationInfo.totalPage)}
                ${renderNext(href,paginationInfo.isLast,paginationInfo.currentPage)}
  </ul>
</nav>`

}

function renderPrevious(href,isFirst,currentPage){
    if(isFirst)
        return ''
    else
        return renderNavigationItem(`${href}page=${currentPage-1}`,"previous")

}

function renderPages(href,currentPage,totalPage){
    let html=''
    for(let i=currentPage;i< totalPage; i++)
        html+=renderNavigationItem(`${href}page=${i}`,i+1)

    return html;
}

function renderNext(href,isLast,currentPage){
    if(isLast)
        return ''
    else
        return renderNavigationItem(`${href}page=${currentPage+1}`,"next")
}


function renderNavigationItem(href, label){
 return `<li class="page-item"><a class="page-link" href="${href}">${label}</a></li>`
}