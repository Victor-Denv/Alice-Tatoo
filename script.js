// Função para abrir o Modal
function abrirModal(event) {
    event.preventDefault(); // Evita que o link pule pro topo da página
    document.getElementById('modalOrçamento').style.display = 'flex';
}

// Função para fechar o Modal
function fecharModal() {
    document.getElementById('modalOrçamento').style.display = 'none';
}

// Função que envia pro WhatsApp (A mesma que já fizemos)
function enviarZap(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let estilo = document.getElementById('estilo').value;
    let local = document.getElementById('local').value;
    let tamanho = document.getElementById('tamanho').value;

    // --- IMPORTANTE: COLOQUE O NÚMERO DELA AQUI ---
    let telefone = "5571999999999"; 

    let texto = `Olá! Vim pelo site da Alice Kayin.%0A%0A*Solicitação de Orçamento:*%0A- Nome: ${nome}%0A- Estilo: ${estilo}%0A- Local: ${local}%0A- Tamanho: ${tamanho}cm`;
    
    let zapUrl = `https://wa.me/${telefone}?text=${texto}`;
    window.open(zapUrl, '_blank');
    
    fecharModal(); // Fecha o modal depois de enviar
}

// Fecha o modal se clicar fora da caixinha
window.onclick = function(event) {
    let modal = document.getElementById('modalOrçamento');
    if (event.target == modal) {
        fecharModal();
    }
}