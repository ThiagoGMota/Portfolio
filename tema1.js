const btnsOpenProject = document.querySelectorAll('.openProject');
const projetoAbertos = document.querySelectorAll('.projetoOpen');

btnsOpenProject.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        projetoAbertos.forEach((projetoAberto, i) => {
            if (i === index) {
                projetoAberto.style.display = 'flex';
                const btnCloseProject = projetoAberto.querySelector('.closeProject');
                btnCloseProject.addEventListener('click', () => {
                    projetoAberto.style.display = 'none';
                });
            } else {
                projetoAberto.style.display = 'none';
            }
        });
    });
});
const telaOrcamento1 = document.getElementById('orcamento-tela-1')
const telaOrcamento2 = document.getElementById('orcamento-tela-2');
const btnNextStep = document.querySelector('.proxima-tela-form');

btnNextStep.addEventListener('click', (event) => {
    event.preventDefault();
    tela2();
});

function tela2 (){
    telaOrcamento1.style.display = 'none'
    telaOrcamento2.style.display = 'flex'
}
