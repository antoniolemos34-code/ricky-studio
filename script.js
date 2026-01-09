// ✅ Set year
document.getElementById("year").textContent = new Date().getFullYear();

// ✅ WhatsApp link (PUT THE REAL NUMBER HERE)
const WHATSAPP_NUMBER = ""; // e.g. "447700900123" (no +, no spaces)
const DEFAULT_MSG = "Hi Ricky! I’d like to book an appointment.";

const waUrl = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MSG)}`
  : `https://api.whatsapp.com/send?text=${encodeURIComponent(DEFAULT_MSG)}`; // fallback (share link)

document.getElementById("waLink").href = waUrl;
document.getElementById("waLink2").href = waUrl;

// ✅ Facebook link (replace with the real Facebook page URL)
const FACEBOOK_URL = "#"; // e.g. "https://www.facebook.com/YourPageHere"
document.getElementById("fbLink").href = FACEBOOK_URL;
document.getElementById("fbLink2").href = FACEBOOK_URL;
