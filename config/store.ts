export const store = {
  name: 'Lallis Store', handle: '@lallisstore', city: 'Palmas, TO', instagram: 'https://www.instagram.com/lallisstore/', linktree: 'https://linktr.ee/lallis.store',
  whatsapp: process.env.NEXT_PUBLIC_STORE_WHATSAPP || '',
  hours: 'Seg. a sex., 9h às 11h e 14h às 17h',
  demo: true
} as const;
export const needsConfirmation = '[A CONFIRMAR COM A LOJA]';
