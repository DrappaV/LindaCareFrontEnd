class PaginationInfo{

    constructor() {
        this._isFirst=false
        this._isLast=false;
        this._totalPage=0;
        this._currentPage=0;
        this._baseUrl = "#error";
    }

    get baseUrl() {
        return this._baseUrl;
    }

    set baseUrl(value) {
        this._baseUrl = value;
    }

    get isFirst() {
        return this._isFirst;
    }

    set isFirst(value) {
        this._isFirst = value;
    }

    get isLast() {
        return this._isLast;
    }

    set isLast(value) {
        this._isLast = value;
    }

    get totalPage() {
        return this._totalPage;
    }

    set totalPage(value) {
        this._totalPage = value;
    }

    get currentPage() {
        return this._currentPage;
    }

    set currentPage(value) {
        this._currentPage = value;
    }

}

export default PaginationInfo