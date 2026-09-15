
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       busqueda(this);
    }
};
xhttp.open("GET", "./assets/articulos.xml", true);
xhttp.send();


function busqueda(xhhtp) {
    document.getElementsByClassName("cards")[0].innerHTML = "";
    var xml = xhhtp.responseXML;
    var articulos = xml.getElementsByTagName("articulos")[0].getElementsByTagName("articulo");
    for(var i = 0; i < articulos.length; i++) {
        var articulo = articulos[i];
        
        document.getElementsByClassName("cards")[0].innerHTML  += `
        
        <div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
                <a href="./pages/${articulo.getAttribute('carpeta')}/">
                    <img class="rounded-base" src="./pages/${articulo.getAttribute('carpeta')}/images/portada.jpg" width=">${articulo.getAttribute('width')}" height=">${articulo.getAttribute('height')}" alt="${articulo.getAttribute('alt')}" />
                </a>
                <a href="./pages/${articulo.getAttribute('carpeta')}/">
                    <h5 class="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">${articulo.getAttribute('titulo')}</h5>
                </a>
                <p class="mb-6 text-body">${articulo.getAttribute('subtitulo')}</p>
                <a href="./pages/${articulo.getAttribute('carpeta')}/" class="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                    Leer más
                    <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
                </a>
            </div>
            
            `;

    }
}
