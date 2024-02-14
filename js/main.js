window.onload = function() {
    loadContent('pages/home.html');
}

function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error(error));
}

function loadSitioCS(){
    fetch('https://raw.githubusercontent.com/alnazo/proyectoWinUI3/main/dto/Sitio.cs')
        .then(response => {
            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('SitioCS').innerText = data;
        })
        .catch(error => {
            console.error('Ocurrió un error al obtener el texto:', error);
        });
}

function loadLogicaCS(){
    fetch('https://raw.githubusercontent.com/alnazo/proyectoWinUI3/main/dto/Logica.cs')
        .then(response => {
            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('LogicaCS').innerText = data;
        })
        .catch(error => {
            console.error('Ocurrió un error al obtener el texto:', error);
        });
}

function loadMainPageCS(){
    fetch('https://raw.githubusercontent.com/alnazo/proyectoWinUI3/main/Views/MainPage.xaml.cs')
        .then(response => {
            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('MainPageCS').innerText = data;
        })
        .catch(error => {
            console.error('Ocurrió un error al obtener el texto:', error);
        });
}