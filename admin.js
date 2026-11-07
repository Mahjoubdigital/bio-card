const DEFAULT_DATA = {
  name: "Zakaria Hamza",
  phone: "+212600000000",
  whatsapp: "212600000000",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  videoId: "",
  links: { web: "https://www.ejemplo.com", instagram: "https://instagram.com/tu_usuario", youtube: "https://youtube.com/@tu_canal", facebook: "https://facebook.com/tu_pagina", tiktok: "https://tiktok.com/@tu_usuario" },
  images: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=70","https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=70","https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=70","https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=70"],
  gallery: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=70","https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=600&q=70","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=70","https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=70"]
};

let DATA = JSON.parse(localStorage.getItem("bioData")) || DEFAULT_DATA;

function loadForm(){
  document.getElementById("f_name").value = DATA.name;
  document.getElementById("f_phone").value = DATA.phone;
  document.getElementById("f_whatsapp").value = DATA.whatsapp;
  document.getElementById("f_avatar").value = DATA.avatar;
  document.getElementById("f_videoId").value = DATA.videoId;
  document.getElementById("f_web").value = DATA.links.web;
  document.getElementById("f_ig").value = DATA.links.instagram;
  document.getElementById("f_yt").value = DATA.links.youtube;
  document.getElementById("f_fb").value = DATA.links.facebook;
  document.getElementById("f_tt").value = DATA.links.tiktok;
  document.getElementById("f_images").value = DATA.images.join("\n");
  document.getElementById("f_gallery").value = DATA.gallery.join("\n");
}

function toast(msg, success=true){
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.style.background = success ? "#10b981" : "#ef4444";
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 3000);
}

document.getElementById("adminForm").addEventListener("submit", e => {
  e.preventDefault();
  DATA.name = document.getElementById("f_name").value.trim();
  DATA.phone = document.getElementById("f_phone").value.trim();
  DATA.whatsapp = document.getElementById("f_whatsapp").value.replace(/\D/g, "");
  DATA.avatar = document.getElementById("f_avatar").value.trim();
  DATA.videoId = document.getElementById("f_videoId").value.trim();
  DATA.links = {
    web: document.getElementById("f_web").value.trim(),
    instagram: document.getElementById("f_ig").value.trim(),
    youtube: document.getElementById("f_yt").value.trim(),
    facebook: document.getElementById("f_fb").value.trim(),
    tiktok: document.getElementById("f_tt").value.trim()
  };
  DATA.images = document.getElementById("f_images").value.split("\n").map(s => s.trim()).filter(Boolean);
  DATA.gallery = document.getElementById("f_gallery").value.split("\n").map(s => s.trim()).filter(Boolean);
  localStorage.setItem("bioData", JSON.stringify(DATA));
  toast("✓ Cambios guardados correctamente");
});

document.getElementById("btnReset").addEventListener("click", () => {
  if (confirm("¿Restablecer todos los datos por defecto?")) {
    DATA = {...DEFAULT_DATA};
    localStorage.setItem("bioData", JSON.stringify(DATA));
    loadForm();
    toast("✓ Datos restablecidos", true);
  }
});

loadForm();