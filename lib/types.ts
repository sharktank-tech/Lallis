export type Product = {id:string; name:string; category:string; description:string; price:number; sizes:string[]; colors:string[]; stock:number; tone:string; tag:string; video:boolean; image?:string};
export type CartItem = {key:string; id:string; name:string; price:number; size:string; color:string; qty:number};
export type DemoOrder = {id:string; createdAt:string; items:CartItem[]; total:number; cep:string; shipping:number; status:'Novo'|'Em atendimento'|'Concluído'};
