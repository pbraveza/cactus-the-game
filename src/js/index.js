const botaoVideo = document.querySelector(".botao-video");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

botaoVideo.addEventListener("click", () => {
        modal.classList.add("aberto");
        video.setAttribute("src",linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
        modal.classList.remove("aberto");
        video.setAttribute("src", "");
})
