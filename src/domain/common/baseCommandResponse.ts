export class BaseCommandResponse<T>{
    success:boolean;
    messages:string;
    Object:T
    constructor(success:boolean, messsages:string, object:T){
        this.success = success;
        this.messages = messsages;
        this.Object = object
    }
}