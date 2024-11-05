// Usar este ejemplo para usar los slots, Custom Properties, Custom Events, attachInternals

const template = `
    <style>
       TODO: añadir modulo css header.css
    </style>
    <header class="header"> TODO: añadir slot
        <div class="identity">
            <h1><a id="main" >Site Name</a></h1>
        </div>  
        <nav class="navigation">
            <ul class="nav">
                <li><a id="about" >About</a></li> 
                <li><a id="news" >News</a></li> 
                <li><a id="contact" >Contact</a></li> 
            </ul>
        </nav>
    </header>`
class CustomHeader extends HTMLElement {

    _selected: string = 'main'
    constructor() {
        super();
        console.log('Iniciando la contrucción de la cabecera.');
        const shadowRoot = this.attachShadow({mode: 'open'})
        shadowRoot.innerHTML = template;
        // const template = document.querySelector<HTMLTemplateElement>('#custom-header-template')
        // if (template) {
        //     shadowRoot.appendChild(document.importNode(template.content, true))
        // }
    }

    connectedCallback() {
        // subscribirnos a los enlaces
    }

    disconnectedCallback(){
        // desubscribirnos a los enlaces
    } 

  
}

export default CustomHeader;
