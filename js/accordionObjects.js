const accordionData = {
    "General": {
        "list" : [
            {
                "name": "Inicio",
                "page": "/pages/home.html"
            }
        ]       
    },
    "Manual": {
        "list" : [
            {
                "name": "Principal",
                "page": "/pages/start.html"
            },
            {
                "name": "Crear entrada",
                "page": "/pages/create.html"
            },
            {
                "name": "Configuracion",
                "page": "/pages/settings.html"
            }
        ] 
    },
    "Documentacion": {
        "list" : [
            {
                "name": "Problema",
                "page": "/pages/docs/prob.html"
            },
            {
                "name": "Doc. Tecnica",
                "page": "/pages/docs/tec.html"
            },
            {
                "name": "Conclusion",
                "page": "/pages/docs/conclu.html"
            },
            {
                "name": "Bibliografia",
                "page": "/pages/docs/biblio.html"
            }
        ]
    }
}
var accordionContainer = document.getElementById('menu-lat');


var index = 1;
for (var section in accordionData) {
    if (accordionData.hasOwnProperty(section)) {
        var sectionData = accordionData[section];
        var sectionItem = document.createElement('div');
        sectionItem.className = 'accordion-item';

        var sectionHeader = document.createElement('h2');
        sectionHeader.className = 'accordion-header';
        sectionHeader.id = 'flush-' + section.toLowerCase().replace(/\s/g, '');

        var sectionButton = document.createElement('button');
        sectionButton.className = 'accordion-button collapsed';
        sectionButton.type = 'button';
        sectionButton.setAttribute('data-bs-toggle', 'collapse');
        sectionButton.setAttribute('data-bs-target', '#flush-' + section.toLowerCase().replace(/\s/g, '') + 'Content');
        sectionButton.setAttribute('aria-expanded', 'true');
        sectionButton.setAttribute('aria-controls', 'flush-' + section.toLowerCase().replace(/\s/g, ''));
        sectionButton.innerText = index + '. ' + section;

        sectionHeader.appendChild(sectionButton);
        sectionItem.appendChild(sectionHeader);

        var sectionContent = document.createElement('div');
        sectionContent.id = 'flush-' + section.toLowerCase().replace(/\s/g, '') + 'Content';
        sectionContent.className = 'accordion-collapse collapse';
        sectionContent.setAttribute('aria-labelledby', 'flush-' + section.toLowerCase().replace(/\s/g, ''));
        sectionContent.setAttribute('data-bs-parent', '#menu-lat');

        for (var i = 0; i < sectionData.list.length; i++) {
            var listItem = sectionData.list[i];
            var sectionBody = document.createElement('div');
            sectionBody.className = 'accordion-body bg-accordion-menu';

            var link = document.createElement('a');
            link.href = '#';
            link.className = "menu-anchor anchor-clear";
            link.setAttribute('onclick', 'loadContent("' + listItem.page + '")');
            link.innerText = listItem.name;

            sectionBody.appendChild(link);
            sectionContent.appendChild(sectionBody);
        }

        sectionItem.appendChild(sectionContent);
        accordionContainer.appendChild(sectionItem);

        index++;
    }
}