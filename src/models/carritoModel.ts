import productItemmodel from "./productItemModel";
import Producto from "../interfaces/Producto"

export default class productModel{
    readonly productoArray : productItemmodel[];

    
    public constructor(data : Producto[]){
        this.productoArray = []

        data.forEach( (producto:Producto) => this.productoArray.push(new productItemmodel(producto) ))
         console.log(this.productoArray)
    };

    

    public getProductArray(){
        return this.productoArray
    }

}