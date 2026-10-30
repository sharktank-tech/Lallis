import type {Product} from '../lib/types';
export function Visual({product,large=false}:{product:Product;large?:boolean}){return <div className={`visual ${product.tone} ${large?'visual-large':''}`}>
 {product.image ? <img src={product.image} alt={product.name} /> : <><div className="visual-sun"/><div className="visual-dress"><div className="dress-top"/><div className="dress-skirt"/></div><span className="visual-small">LALLIS • EDITORIAL</span><span className="visual-placeholder">Imagem ilustrativa</span></>}
 </div>}
