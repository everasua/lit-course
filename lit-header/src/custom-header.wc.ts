// Usar este ejemplo para usar los slots, Custom Properties, Custom Events, attachInternals

const template = `
    <style>
       @import '/dist/header.css';
    </style>
    <header class="header">
        <div class="identity">
            <h1><slot></slot><a id="main" >Site Name</a></h1>
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

    _selected: string= 'main';
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
        if(this.shadowRoot) {

            Array.from(this.shadowRoot.querySelectorAll('a')).forEach( node =>
                node.addEventListener('click', (e ) => {
                    this.handleClick(e, node.id)
                })
            )

        }
    }

    private handleClick(e: Event, type: string) {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget
        this._selected = type;
        const event = new CustomEvent('header-navigation', { detail: type });
        this.dispatchEvent(event);
      }
}

export default CustomHeader;
