/* ============ DATOS POR DEFECTO (si no hay en localStorage) ============ */
const DEFAULT_DATA = {
  name: "Zakaria Hamza",
  phone: "+212600000000",
  whatsapp: "212600000000",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  videoId: "",
  links: {
    web: "https://www.ejemplo.com",
    instagram: "https://instagram.com/tu_usuario",
    youtube: "https://youtube.com/@tu_canal",
    facebook: "https://facebook.com/tu_pagina",
    tiktok: "https://tiktok.com/@tu_usuario"
  },
  images: [
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=70",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=70",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=70",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=70"
  ],
  gallery: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=70",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=600&q=70",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=70",
    "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=70"
  ]
};

/* ============ TRADUCCIONES ============ */
const I18N = {
  es: {
    tagline: "Pintor y decorador profesional en Casablanca.",
    desc: "Pintor y decorador profesional en Casablanca: pintura de interiores, exteriores y fachadas. Calidad, profesionalidad y acabados impecables. <strong>Presupuestos gratuitos y entrega puntual.</strong>",
    about_title: "Acerca de la pintura de Zakaria",
    about_intro: "Tu especialista en pintura interior, exterior y decoración en Casablanca.",
    about_p: "Realizamos todo tipo de trabajos de pintura y decoración para particulares, comunidades y profesionales. Damos nueva vida a tus espacios con un trabajo cuidado y acabados de calidad.",
    services_title: "Nuestros servicios:",
    services: ["Pintura de interiores","Pintura de exteriores","Pintura de fachadas y edificios","Pintura de pisos y casas","Pintura de techos","Pintura y renovación de puertas","Pintura de escaleras y zonas comunes","Pintura y decoración de cocinas","Pintura y renovación de baños","Decoración de interiores","Reformas y acabados"],
    commits_title: "Nuestros compromisos:",
    commits: ["Trabajo cuidado y de calidad","Respeto de los plazos","Acabados profesionales","Intervención en casas, pisos y edificios","Asesoramiento personalizado","Presupuesto gratuito y sin compromiso"],
    area_title: "Área de intervención",
    area_intro: "Intervenimos en Casablanca y alrededores, así como en varias ciudades del reino.",
    cities: ["Casablanca","Sbata","Barrio California","Dar Bouazza","Mohammedia","Sidi Rahal Chatai","Ain Diab","Aïn Chock","Bouskoura","Bourgogne","Maârif","Marrakech","Rabat","Tanger","Tetuán","Agadir"],
    insp_title: "Inspiración",
    insp_text: "Una selección de ideas y colores para tu próximo proyecto.",
    link_web: "Sitio web", link_ig: "Instagram", link_yt: "YouTube", link_fb: "Facebook", link_tt: "TikTok",
    cta: "Presupuesto gratuito por WhatsApp",
    chat_aria: "Enviar mensaje", call_aria: "Llamar por teléfono", wa_aria: "Escribir por WhatsApp",
    modal_title: "Envíanos un mensaje", modal_name: "Tu nombre", modal_msg: "Tu mensaje…",
    modal_send: "Enviar por WhatsApp", modal_cancel: "Cancelar",
    toast_video: "Añade tu ID de video en el panel de administración",
    toast_sent: "Abriendo WhatsApp…",
    copyright: "Copyright © {year} Zakaria Hamza"
  },
  fr: {
    tagline: "Peintre professionnel & décorateur à Casablanca.",
    desc: "Peintre professionnel et décorateur à Casablanca : peinture intérieure, extérieure et façades. Qualité, professionnalisme et finitions soignées. <strong>Devis gratuit et respect des délais.</strong>",
    about_title: "À propos de Zakaria Peinture",
    about_intro: "Votre spécialiste en peinture intérieure, extérieure et décoration à Casablanca.",
    about_p: "Nous réalisons tous types de travaux de peinture et de décoration pour les particuliers, les immeubles et les professionnels. Nous donnons une nouvelle vie à vos espaces grâce à un travail soigné et des finitions de qualité.",
    services_title: "Nos prestations :",
    services: ["Peinture intérieure","Peinture extérieure","Peinture de façades et d'immeubles","Peinture des appartements et des maisons","Peinture des plafonds","Peinture et rénovation des portes","Peinture des cages d'escalier et parties communes","Peinture et décoration des cuisines","Peinture et rénovation des salles de bain","Décoration intérieure","Travaux de rénovation et finitions"],
    commits_title: "Nos engagements :",
    commits: ["Travail soigné et de qualité","Respect des délais","Finitions professionnelles","Intervention sur maisons, appartements et immeubles","Conseils personnalisés","Devis gratuit et sans engagement"],
    area_title: "Zone d'intervention",
    area_intro: "Nous intervenons à Casablanca et ses environs, ainsi que dans plusieurs villes du Royaume.",
    cities: ["Casablanca","Sbata","Quartier Californie","Dar Bouazza","Mohammédia","Sidi Rahal Chatai","Ain Diab","Aïn Chock","Bouskoura","Bourgogne","Maârif","Marrakech","Rabat","Tanger","Tétouan","Agadir"],
    insp_title: "Inspiration",
    insp_text: "Une sélection d'idées et de couleurs pour votre prochain projet.",
    link_web: "Site web", link_ig: "Instagram", link_yt: "YouTube", link_fb: "Facebook", link_tt: "TikTok",
    cta: "Devis gratuit sur WhatsApp",
    chat_aria: "Envoyer un message", call_aria: "Appeler", wa_aria: "Écrire sur WhatsApp",
    modal_title: "Envoyez-nous un message", modal_name: "Votre nom", modal_msg: "Votre message…",
    modal_send: "Envoyer sur WhatsApp", modal_cancel: "Annuler",
    toast_video: "Ajoutez votre ID vidéo dans le panneau d'administration",
    toast_sent: "Ouverture de WhatsApp…",
    copyright: "Copyright © {year} Zakaria Hamza"
  },
  ar: {
    tagline: "صباغ وديكوراتور محترف في الدار البيضاء.",
    desc: "صباغ وديكوراتور محترف في الدار البيضاء: صباغة الداخلية والخارجية والواجهات. جودة واحترافية وتشطيبات لا تشوبها شائبة. <strong>تقدير التكلفة مجاني وتسليم في الموعد المحدد.</strong>",
    about_title: "حول صباغة زكريا",
    about_intro: "متخصصك في الصباغة الداخلية والخارجية والديكور في الدار البيضاء.",
    about_p: "ننفذ جميع أنواع أعمال الصباغة والديكور للأفراد والعمائر والمهنيين. نمنح مساحاتك حياة جديدة بعمل متقن وتشطيبات عالية الجودة.",
    services_title: "خدماتنا:",
    services: ["الصباغة الداخلية","الصباغة الخارجية","صباغة الواجهات والعمائر","صباغة الشقق والمنازل","صباغة الأسقف","صباغة وتجديد الأبواب","صباغة سلالم العمائر والأجزاء المشتركة","صباغة وديكور المطابخ","صباغة وتجديد الحمامات","الديكور الداخلي","أشغال التجديد والتشطيبات"],
    commits_title: "التزاماتنا:",
    commits: ["عمل متقن وعالي الجودة","احترام المواعيد","تشطيبات احترافية","التدخل في المنازل والشقق والعمائر","نصائح مخصصة","تقدير تكلفة مجاني وبدون التزام"],
    area_title: "مجالات التدخل",
    area_intro: "نتدخل في الدار البيضاء وضواحيها وفي عدة مدن بالمملكة.",
    cities: ["الدار البيضاء","سباتة","حي كاليفورنيا","دار بوعزة","المحمدية","سيدي رحال الشطاي","عين الذياب","عين الشق","بوسكورة","بورغون","المعاريف","مراكش","الرباط","طنجة","تطوان","أكادير"],
    insp_title: "إلهام",
    insp_text: "مختارات من الأفكار والألوان لمشروعك المقبل.",
    link_web: "موقع الويب", link_ig: "إنستغرام", link_yt: "يوتيوب", link_fb: "فيسبوك", link_tt: "تيك توك",
    cta: "تقدير تكلفة مجاني عبر واتساب",
    chat_aria: "إرسال رسالة", call_aria: "اتصال هاتفي", wa_aria: "مراسلة عبر واتساب",
    modal_title: "أرسل لنا رسالة", modal_name: "اسمك", modal_msg: "رسالتك…",
    modal_send: "إرسال عبر واتساب", modal_cancel: "إلغاء",
    toast_video: "أضف معرف الفيديو في لوحة الإدارة",
    toast_sent: "جارٍ فتح واتساب…",
    copyright: "حقوق النشر © {year} زكريا حمزة"
  }
};

/* ============ UTILIDADES ============ */
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
let lang = localStorage.getItem("bioLang") || "es";
const DATA = JSON.parse(localStorage.getItem("bioData")) || DEFAULT_DATA;
const t = k => (I18N[lang] && I18N[lang][k]) ?? I18N.es[k] ?? "";

function applyLang(l){
  lang = l;
  localStorage.setItem("bioLang", l);
  document.documentElement.lang = l;
  document.documentElement.dir = (l === "ar") ? "rtl" : "ltr";
  $$("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n));
  $$("[data-i18n-html]").forEach(el => el.innerHTML = t(el.dataset.i18nHtml));
  $$("[data-aria]").forEach(el => el.setAttribute("aria-label", t(el.dataset.aria)));
  $("#servicesList").innerHTML = t("services").map(x => `<li>${x}</li>`).join("");
  $("#commitsList").innerHTML  = t("commits").map(x => `<li>${x}</li>`).join("");
  $("#citiesChips").innerHTML  = t("cities").map(x => `<span class="chip">${x}</span>`).join("");
  $$("[data-i18n='copyright']").forEach(el => el.textContent = t("copyright").replace("{year}", new Date().getFullYear()));
  $$(".lang-btn").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === l)));
  updateOpenPanels();
}

/* ============ IDIOMAS ============ */
$$(".lang-btn").forEach(b => b.addEventListener("click", () => applyLang(b.dataset.lang)));

/* ============ ACORDEONES ============ */
function updateOpenPanels(){
  $$(".acc-btn[aria-expanded='true']").forEach(btn => {
    const p = document.getElementById(btn.getAttribute("aria-controls"));
    p.style.maxHeight = p.scrollHeight + "px";
  });
}
$$(".acc-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    const p = document.getElementById(btn.getAttribute("aria-controls"));
    btn.setAttribute("aria-expanded", String(!open));
    p.style.maxHeight = open ? "0px" : p.scrollHeight + "px";
  });
});
window.addEventListener("resize", updateOpenPanels);

/* ============ CARRUSEL ============ */
const track = $("#carTrack"), dotsBox = $("#carDots");
let idx = 0, timer = null;
DATA.images.forEach((src, i) => {
  track.insertAdjacentHTML("beforeend", `<img src="${src}" alt="${DATA.name} ${i+1}" loading="${i? "lazy":"eager"}">`);
  dotsBox.insertAdjacentHTML("beforeend", `<button aria-label="Slide ${i+1}"></button>`);
});
const dots = $$("#carDots button");
function go(i){
  idx = (i + DATA.images.length) % DATA.images.length;
  track.style.transform = `translateX(-${idx * 100}%)`;
  dots.forEach((d, j) => d.classList.toggle("on", j === idx));
}
function restart(){ clearInterval(timer); timer = setInterval(() => go(idx + 1), 5000); }
$("#carPrev").addEventListener("click", () => { go(idx - 1); restart(); });
$("#carNext").addEventListener("click", () => { go(idx + 1); restart(); });
dots.forEach((d, j) => d.addEventListener("click", () => { go(j); restart(); }));
let x0 = null;
$("#carousel").addEventListener("pointerdown", e => x0 = e.clientX);
$("#carousel").addEventListener("pointerup", e => {
  if (x0 === null) return;
  const dx = e.clientX - x0;
  if (Math.abs(dx) > 40) { go(idx + (dx < 0 ? 1 : -1)); restart(); }
  x0 = null;
});
go(0); restart();

/* ============ GALERÍA ============ */
$("#gallery").innerHTML = DATA.gallery.map((src, i) => `<img src="${src}" alt="Inspiration ${i+1}" loading="lazy">`).join("");

/* ============ VIDEO YOUTUBE ============ */
(function buildVideo(){
  const box = $("#videoBox");
  const poster = DATA.videoId
    ? `https://i.ytimg.com/vi/${DATA.videoId}/hqdefault.jpg`
    : "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=70";
  box.innerHTML = `
    <img class="thumb" src="${poster}" alt="Video">
    <span class="vid-title">${DATA.name}</span>
    <button class="play-btn" aria-label="Play">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
    </button>`;
  box.querySelector(".play-btn").addEventListener("click", () => {
    if (!DATA.videoId) return toast(t("toast_video"));
    box.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${DATA.videoId}?autoplay=1&rel=0"
      title="YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen loading="lazy"></iframe>`;
  });
})();

/* ============ ENLACES ============ */
$("#btnCall").href = `tel:${DATA.phone.replace(/\s/g, "")}`;
$("#btnWa").href = $("#ctaWa").href = `https://wa.me/${DATA.whatsapp}?text=${encodeURIComponent("Hola " + DATA.name + ", me gustaría pedir un presupuesto.")}`;
$("#linkWeb").href = DATA.links.web;
$("#linkIg").href  = DATA.links.instagram;
$("#linkYt").href  = DATA.links.youtube;
$("#linkFb").href  = DATA.links.facebook;
$("#linkTt").href  = DATA.links.tiktok;

/* ============ MODAL ============ */
const modal = $("#chatModal");
$("#btnChat").addEventListener("click", () => { modal.hidden = false; $("#fName").focus(); });
$("#modalCancel").addEventListener("click", () => modal.hidden = true);
modal.addEventListener("click", e => { if (e.target === modal) modal.hidden = true; });
document.addEventListener("keydown", e => { if (e.key === "Escape") modal.hidden = true; });
$("#chatForm").addEventListener("submit", e => {
  e.preventDefault();
  const txt = `Hola, soy ${$("#fName").value.trim()}. ${$("#fMsg").value.trim()}`;
  window.open(`https://wa.me/${DATA.whatsapp}?text=${encodeURIComponent(txt)}`, "_blank");
  modal.hidden = true; e.target.reset(); toast(t("toast_sent"));
});

/* ============ TOAST ============ */
let toastTimer;
function toast(msg){
  const el = $("#toast");
  el.textContent = msg; el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

/* ============ AVATAR ============ */
$("#avatar").src = DATA.avatar;
$("#avatar").addEventListener("error", function(){
  const initials = DATA.name.split(" ").map(w => w[0]).slice(0, 2).join("");
  this.outerHTML = `<div class="avatar-fallback">${initials}</div>`;
});

/* ============ ANIMACIÓN ============ */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: .12 });
$$(".reveal").forEach(el => io.observe(el));

/* ============ INICIO ============ */
applyLang(lang);