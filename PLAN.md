# PLAN — Lallis Store MVP (demonstração)

## Objetivo
Protótipo visual navegável, mobile-first, para apresentar a uma potencial cliente. Não constitui uma loja publicada ou operação comercial.

## Decisões técnicas
- Next.js App Router + React + TypeScript.
- CSS modularizado em `app/globals.css`, sem Tailwind: reduz dependências e configuração para facilitar abertura imediata da demo. Cores fonte em `config/theme.ts` e refletidas nos custom properties CSS.
- Catálogo inicial em `seed/products.json`.
- Persistência **localStorage** para sacola, cadastro de produtos e pedidos; **não foi usado SQLite/Prisma** porque este protótipo não precisa de servidor de dados e SQLite local não oferece persistência durável no Vercel. Para transformar em sistema real, adicionar autenticação, banco externo e validações no servidor.
- ViaCEP consulta apenas endereço; `R$ 19,90` de frete é intencionalmente **fictício**.
- WhatsApp desabilitado até definir `NEXT_PUBLIC_STORE_WHATSAPP`; nunca adivinhar número.
- Sem pagamento Pix real, sem chaves ou transações.

## Fases concluídas nesta entrega
- [x] Fase 0: documentação e registro das pendências; pasta `input/` deve receber materiais autorizados.
- [x] Fase 1: scaffold, tema, seed.
- [x] Fase 2: home, catálogo, detalhes, placeholders para vídeos e comunidade.
- [x] Fase 3: sacola, CEP ViaCEP, orçamento de frete fictício, WhatsApp condicionado à configuração, indicador de atendimento no fuso de Palmas.
- [x] Fase 4: formulário para cadastrar/editar/excluir produtos e lista de pedidos/status **apenas no navegador**.
- [x] Fase 5: páginas neutras e instruções de execução.

## Pendências de implantação
- Validar contato, produtos reais, mídia e políticas com a loja.
- Substituir placeholders somente com autorização.
- Testar o fluxo final em um telefone físico.
- Publicar na Vercel (requer conta/autorização; não incluído no artefato).
