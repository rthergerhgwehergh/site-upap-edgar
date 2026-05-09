document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os itens da barra de navegação
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            
            // Remove a classe 'active' de TODOS os itens
            navItems.forEach(nav => nav.classList.remove('active'));

            // Adiciona a classe 'active' APENAS no item que foi clicado
            this.classList.add('active');

            // NOTA: Se você quiser que o clique apenas mude a cor sem recarregar a página 
            // (efeito visual), descomente a linha abaixo:
            // e.preventDefault(); 
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Selecionando os elementos
    const menuBtn = document.querySelector('.header-left svg'); // O ícone das 3 linhas
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    // Função para abrir o menu
    menuBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    });

    // Função para fechar o menu ao clicar no fundo escuro
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    // (Opcional) Fechar menu ao clicar em um item
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o ícone de perfil (bonequinho) no header
    // O primeiro é o sino, o segundo é o bonequinho
    const profileBtn = document.querySelectorAll('.header-icons svg')[1]; 
    const profileModal = document.getElementById('profile-modal');
    const profileOverlay = document.getElementById('profile-overlay');

    // Abrir Perfil
    profileBtn.addEventListener('click', () => {
        profileModal.classList.add('active');
        profileOverlay.classList.add('active');
    });

    // Fechar ao clicar fora
    profileOverlay.addEventListener('click', () => {
        profileModal.classList.remove('active');
        profileOverlay.classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o ícone de perfil (bonequinho) no header
    const profileBtn = document.querySelectorAll('.header-icons svg')[1]; 
    const profileSidebar = document.getElementById('profile-sidebar');
    const profileOverlay = document.getElementById('profile-overlay');

    // Abrir Perfil como Sidebar
    profileBtn.addEventListener('click', () => {
        profileSidebar.classList.add('active');
        profileOverlay.classList.add('active');
    });

    // Fechar Sidebar ao clicar fora no overlay
    profileOverlay.addEventListener('click', () => {
        profileSidebar.classList.remove('active');
        profileOverlay.classList.remove('active');
    });

    // (Opcional) Fechar sidebar ao clicar em um item da lista
    const profileItems = document.querySelectorAll('#profile-sidebar .action-btn');
    profileItems.forEach(item => {
        item.addEventListener('click', () => {
            profileSidebar.classList.remove('active');
            profileOverlay.classList.remove('active');
        });
    });
});

// Função para abrir a tela de Dados Pessoais
// Chame essa função ao clicar no botão "Datos Personales" da sidebar
function openDatosPersonales() {
    const dpScreen = document.getElementById('datos-personales-screen');
    dpScreen.classList.add('active');
}

// Função para fechar e voltar
function closeDatosPersonales() {
    const dpScreen = document.getElementById('datos-personales-screen');
    dpScreen.classList.remove('active');
}

// Configurar o clique no botão da sidebar de perfil
document.addEventListener('DOMContentLoaded', () => {
    // Busca o botão "Datos Personales" dentro da aba de perfil
    const datosBtn = document.querySelector('.action-btn:nth-child(1)');
    if(datosBtn) {
        datosBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openDatosPersonales();
        });
    }
});
