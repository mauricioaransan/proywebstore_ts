import axios from 'axios'
import {API_PREFIX_MAIN} from "@/constants";

export class ProductoServicios { 
 
    public async getProductos(){

        const {data} = await axios.get(`${API_PREFIX_MAIN}/products`) 
        return data
    } 

    public async getProductosbyID(id:string|string[]) : Promise<any> {

        const {data} = await axios.get(`${API_PREFIX_MAIN}/products/detalle/${id}`)
        return data
    } 
    public async getImgbyID(id:string|string[]) : Promise<any> {

        const {data} = await axios.get(`${API_PREFIX_MAIN}/products/img/${id}`)
        return data
    } 
    public async getComplementos(tipo:string|string[]) : Promise<any> {

        const {data} = await axios.get(`${API_PREFIX_MAIN}/products/tipo/${tipo}`)
        return data
    } 
    public async getMarcaProd(tipo:string|string[]) : Promise<any> {

        const {data} = await axios.get(`${API_PREFIX_MAIN}/products/marca/${tipo}`)
        return data
    } 
    public async getAllMarcasProd(): Promise<any> {

        const {data} = await axios.get(`${API_PREFIX_MAIN}/products/allmarcas`)
        return data
    } 

}
    

export const productoServicios = new ProductoServicios()
