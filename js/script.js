/* TAHUN OTOMATIS */
document.getElementById("tahun").textContent =
    new Date().getFullYear();

/* PESAN PRODUK MELALUI WHATSAPP */
function pesan(namaProduk) {
    const nomorWhatsApp = "6282177101657";

    const pesanWhatsApp =
        `Halo Cireng Tasya, saya ingin memesan ${namaProduk}.`;

    const url =
        "https://wa.me/" + nomorWhatsApp +
        "?text=" + encodeURIComponent(pesanWhatsApp);

    window.open(url, "_blank");
}