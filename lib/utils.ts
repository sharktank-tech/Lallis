export const brl = (n:number) => n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
export const onlyDigits = (v:string) => v.replace(/\D/g,'');
export const isOfficeOpen = (date = new Date()) => {
  const parts = new Intl.DateTimeFormat('en-US',{timeZone:'America/Araguaina',weekday:'short',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(date);
  const get = (t:string)=>parts.find(p=>p.type===t)?.value || '';
  const min = Number(get('hour'))*60+Number(get('minute'));
  return !['Sat','Sun'].includes(get('weekday')) && ((min >= 540 && min < 660) || (min >= 840 && min < 1020));
};
export const whatsappLink = (phone:string,message:string) => phone ? `https://wa.me/${onlyDigits(phone)}?text=${encodeURIComponent(message)}` : '';
