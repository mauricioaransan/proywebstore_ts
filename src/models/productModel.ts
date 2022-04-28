import productItemmodel from "./productItemModel";
import Producto from "../interfaces/Producto"

export default class productModel{
    readonly productoArray : productItemmodel[];

    
    public constructor(data : Producto[]){ 
        this.productoArray = []

        data.forEach((producto) => this.productoArray.push(new productItemmodel(producto) )) 
    };

    

    public getProductArray(){
        return this.productoArray
    }

}