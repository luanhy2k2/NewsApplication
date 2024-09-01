export class BaseQuerieResponse<T>{
    pageIndex:number;
    pageSize:number;
    item:T[];
    total:number;
    keyword:string
    constructor(pageIndex:number,pageSize:number,item:T[], total:number, keyword:string){
        this.pageIndex = pageIndex;
        this.pageSize = pageSize;
        this.item = item;
        this.total = total;
        this.keyword = keyword
    }
}