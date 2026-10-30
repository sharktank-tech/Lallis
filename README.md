# Lallis Store — MVP demonstrativo

Protótipo de e-commerce para apresentação, conforme `RELATORIO_LALLISSTORE_v2.md`. **Não é uma loja oficial e não realiza compras reais.**

## Rodar localmente

Requisitos: Node.js 20+.

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Configurar WhatsApp (opcional)

Crie `.env.local` (não versionar):

```dotenv
NEXT_PUBLIC_STORE_WHATSAPP=5563999999999
```

Troque pelo **número comercial autorizado**. Sem ele, os botões de WhatsApp explicam que falta configuração, e o checkout não registra pedido fictício. Reinicie o servidor após alterar a variável. Os pedidos são registrados no navegador depois de abrir o WhatsApp; não há backend de pedidos nem confirmação da loja.

## Páginas

- `/` — Home editorial, categorias, novidades, Looks em vídeo e Lallis Girls.
- `/catalogo` — Catálogo com filtros de categoria, tamanho e cor.
- `/produto/vestido-aurora` — Exemplo de detalhe do produto.
- `/sacola` — Sacola, CEP via ViaCEP, frete **simulado**, resumo pelo WhatsApp, Pix **não funcional**.
- `/admin` — Administração **local e sem login** para apresentação, nunca para uso produtivo.
- `/info/trocas`, `/info/envios`, `/info/sobre`, `/info/contato`, `/info/como-comprar` — Institucionais com pendências explícitas.

## Deploy de demonstração na Vercel

1. Crie repositório **privado** no GitHub; não inclua `.env.local`, imagens não autorizadas ou arquivos de pesquisa interna.
2. Importe o repositório na Vercel usando framework Next.js.
3. Defina `NEXT_PUBLIC_STORE_WHATSAPP` somente depois de receber a confirmação do número.
4. Publique e valide em largura 360px e no Chrome Android/iOS.

**Limitação importante:** produtos, sacola e pedidos adicionados no admin são salvos em `localStorage`. São individuais a cada navegador, não sincronizam entre dispositivos, podem ser perdidos ao limpar dados e não aparecem no navegador da dona da loja. Não usar esta versão para captar pedidos de verdade. No deploy, os produtos seed aparecem normalmente para todas as pessoas.

## Sobre imagens

Os produtos e preços no catálogo são fictícios. Não há uso de fotos ou vídeos de Instagram. Os fundos e representações de peças são produzidos via CSS. Os cards de vídeo **não reproduzem conteúdo**, apenas abrem o produto; isso é intencional até haver autorização e arquivos reais.

## Limitações e próximo passo

Não há login, banco persistente, pagamento, frete real, garantia de estoque, upload real de imagens, integrações de redes sociais ou emissão fiscal. Antes do lançamento real: definir políticas e criar backend com autenticação e banco durável.
