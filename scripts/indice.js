
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
    var articulo = articulos[0];

    document.getElementsByClassName("cards")[0].innerHTML  += `
        <section style=" border-radius: 35%; background-image: url('./pages/${articulo.getAttribute("carpeta")}/images/portada.jpg');" class="bg-center bg-no-repeat bg-blend-multiply ultimo">
            <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 style="background-color:rgba(0, 0, 0, 0.6); display:inline-block;" class="mb-6 text-4xl font-bold tracking-tighter text-white md:text-5xl lg:text-6xl">${articulo.getAttribute('titulo')}</h1>
                
                
                
                <div><p style="background-color:rgba(0, 0, 0, 0.6); font-size:22px; display:inline-block; width:80%; padding-inline:0px;" class="mb-8 text-base font-normal text-white md:text-xl sm:px-16 lg:px-48">${articulo.getAttribute('subtitulo')}</p>
                </div>
                
                
                <a style="background-color: darkblue; width: auto; opacity:0.9;" href="./pages/${articulo.getAttribute('carpeta')}/" class="inline-flex items-center justify-center text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium rounded-base text-base px-5 py-3 focus:outline-none">
                        Leer más
                        <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
                    </a>
            </div>
        </section>
        `;


    for(var i = 1; i < 10; i++) {
        articulo = articulos[i];
        
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
