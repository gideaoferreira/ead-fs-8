function executarAoClicar() {
    const meuToast = document.getElementById('meu-toast');
    const toast = new bootstrap.Toast(meuToast)
    toast.show();
}
const btnEventos = document.getElementById('btn-eventos');
btnEventos.addEventListener('click', executarAoClicar);

function executarToast() {
    const meuModal = document.getElementById('meu-modal')
    const modal = new bootstrap.Modal(meuModal)
    modal.show()
}
const btnOpenModal = document.getElementById('abrir-modal');
btnOpenModal.addEventListener('click', executarToast)