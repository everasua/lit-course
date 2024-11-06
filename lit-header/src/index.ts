
import CustomHeader  from "./custom-header.wc";

customElements.define('custom-header',CustomHeader)

// Define el wc como un tag válido para que TS pueda inferir la clase cuando trabaja con un elememto, 
// por ejemplo document.createElement('img') devueve un elemento de tipo HTMLImageElement 

declare global {
    interface HTMLElementTagNameMap {
      'custom-header': CustomHeader;
    }
  }