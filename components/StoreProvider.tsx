'use client';
import {createContext,useContext,useEffect,useState} from 'react';
import data from '../seed/products.json';
import type {Product,CartItem,DemoOrder} from '../lib/types';
const initialProducts = data as Product[];
type State={products:Product[];cart:CartItem[];orders:DemoOrder[]; add:(p:Product,size:string,color:string)=>void;changeQty:(key:string,delta:number)=>void;clear:()=>void;saveProduct:(p:Product)=>void;removeProduct:(id:string)=>void;saveOrder:(o:DemoOrder)=>void;updateOrder:(id:string,status:DemoOrder['status'])=>void};
const Context=createContext<State|null>(null);
export function StoreProvider({children}:{children:React.ReactNode}){
 const [products,setProducts]=useState<Product[]>(initialProducts);const [cart,setCart]=useState<CartItem[]>([]);const [orders,setOrders]=useState<DemoOrder[]>([]);const [loaded,setLoaded]=useState(false);
 useEffect(()=>{try{const p=localStorage.getItem('lallis_products');const c=localStorage.getItem('lallis_cart');const o=localStorage.getItem('lallis_orders');if(p){const saved=JSON.parse(p) as Product[];setProducts(saved.map(item=>{const seed=initialProducts.find(x=>x.id===item.id);return seed?.image && !item.image ? {...item,image:seed.image}:item}));}if(c)setCart(JSON.parse(c));if(o)setOrders(JSON.parse(o));}catch{}setLoaded(true)},[]);
 useEffect(()=>{if(loaded)localStorage.setItem('lallis_products',JSON.stringify(products));},[loaded,products]);
 useEffect(()=>{if(loaded)localStorage.setItem('lallis_cart',JSON.stringify(cart));},[loaded,cart]);
 useEffect(()=>{if(loaded)localStorage.setItem('lallis_orders',JSON.stringify(orders));},[loaded,orders]);
 const add=(p:Product,size:string,color:string)=>{const key=`${p.id}:${size}:${color}`;setCart(old=>{const prev=old.find(x=>x.key===key);return prev?old.map(x=>x.key===key?{...x,qty:Math.min(x.qty+1,p.stock)}:x):[...old,{key,id:p.id,name:p.name,price:p.price,size,color,qty:1}]});};
 const changeQty=(key:string,delta:number)=>setCart(old=>old.map(x=>x.key===key?{...x,qty:Math.min(Math.max(x.qty+delta,0),products.find(p=>p.id===x.id)?.stock??99)}:x).filter(x=>x.qty>0));
 return <Context.Provider value={{products,cart,orders,add,changeQty,clear:()=>setCart([]),saveProduct:p=>setProducts(old=>[p,...old.filter(x=>x.id!==p.id)]),removeProduct:id=>setProducts(old=>old.filter(x=>x.id!==id)),saveOrder:o=>setOrders(old=>[o,...old]),updateOrder:(id,status)=>setOrders(old=>old.map(o=>o.id===id?{...o,status}:o))}}>{children}</Context.Provider>;
}
export function useStore(){const s=useContext(Context);if(!s)throw new Error('StoreProvider ausente');return s;}
