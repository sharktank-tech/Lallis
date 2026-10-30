import type {Metadata} from 'next';import {StoreProvider} from '../components/StoreProvider';import {Header} from '../components/Header';import {Footer} from '../components/Footer';import './globals.css';
export const metadata:Metadata={title:'Lallis Store | Demo de e-commerce',description:'Protótipo demonstrativo da Lallis Store. Produtos e preços ilustrativos.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body><StoreProvider><Header/><main>{children}</main><Footer/></StoreProvider></body></html>}
