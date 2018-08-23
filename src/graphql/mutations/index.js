import cupones from "./cupones";
import tipoRest from "./tipoRest";
import tiendas from "./tiendas";
import productos from "./productos";
import pedidos from "./pedidos";


export default {
    ...cupones,
    ...tipoRest,
    ...tiendas,
    ...productos,
    ...pedidos
}