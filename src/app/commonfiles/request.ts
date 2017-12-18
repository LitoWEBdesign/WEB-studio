export class Request{
    public id:number;
    public name:string;
    public mail:string
    public company:string;
    public type:string;
    public text?:string;
    public color?:boolean;
    constructor(id,name,mail,company,type,text,color){ 
        this. id=id,
        this. name=name,
        this. mail=mail,
        this. company=company,
        this. type=type,
        this. text=text
        this.color=color;
    }
}