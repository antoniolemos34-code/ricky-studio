// ✅ EDITA SÓ ISTO (para ficar 100% direto)
const WHATSAPP_NUMBER = "447000000000"; // <-- troca pelo número (com código do país, sem +, sem espaços)
const WHATSAPP_MESSAGE = "Hi Ricky! I'd like to book an appointment.";
const INSTAGRAM_URL = "https://www.instagram.com/rickybarbers/";
const FACEBOOK_URL = "https://www.facebook.com/"; // <-- coloca aqui o link certo do Facebook (página do Ricky)

function waLink(number, message) {
  const text = encodeURIComponent(message || "");
  return `https://wa.me/${number}?text=${text}`;
}

const links = {
  whatsapp: waLink(WHATSAPP_NUMBER, WHATSAPP_MESSAGE),
  instagram: INSTAGRAM_URL,
  facebook: FACEBOOK_URL
};

function setHref(id, url){
  const el = document.getElementById(id);
  if (el) el.href = url;
}

setHref("navWhatsApp", links.whatsapp);
setHref("navInstagram", links.instagram);
setHref("navFacebook", links.facebook);

setHref("btnWhatsApp", links.whatsapp);
setHref("btnInstagram", links.instagram);
setHref("btnFacebook", links.facebook);

setHref("ctaWhatsApp", links.whatsapp);
setHref("ctaInstagram", links.instagram);
setHref("ctaFacebook", links.facebook);

document.getElementById("year").textContent = new Date().getFullYear();
