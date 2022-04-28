import Producto from "@/interfaces/Producto";

class productItemmodel{

   readonly id: number; 
   readonly precio: number;
   readonly descuento: number;
   readonly descuento_cmr: number;
   readonly description: string;
   readonly marca: string;
   readonly tipo: string;
   readonly nombre: string;
   readonly tienda: boolean;
   readonly despacho: boolean
   readonly img: string

    constructor(data: Producto){
        this.id = data.id
        this.precio = data.precio
        this.descuento = data.descuento
        this.descuento_cmr = data.descuento_cmr
        this.description = data.descripcion
        this.marca = data.marca
        this.tipo = data.tipo
        this.nombre = data.nombre
        this.tienda = data.tienda
        this.despacho = data.despacho
        this.img = data.img
    }
    
    public getId(){
        return this.id
    }
    public getPrecio(){
        return this.precio
    }
    public getDescuento(){
        return this.descuento
    }
    public getDescuentoCMR(){
        return this.descuento_cmr
    }
    public getDescription(){
        return this.description
    }
    public getMarca(){
        return this.marca
    }
    public getTipo(){
        return this.tipo
    }
    public getNombre(){
        return this.nombre
    }
    public getTienda(){
        return this.tienda
    }
    public getDespacho(){
        return this.despacho
    }
    public getImg(){
        return this.img
    }


}
export default productItemmodel