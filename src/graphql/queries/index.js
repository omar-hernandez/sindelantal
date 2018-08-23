import user from './user'
import cupones from './cupones';
import tipoRest from './tipoRest';
import productos from './productos';
import tiendas from './tiendas';
import pedidos from './pedidos';

export default {
    ...user,
    ...cupones,
    ...tipoRest,
    ...productos,
    ...tiendas,
    ...pedidos
}