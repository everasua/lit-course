// Usar este ejemplo para usar los slots, Custom Properties, Custom Events, attachInternals

import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('custom-header')
class CustomHeader extends LitElement {
  static styles = css`
    :host {
      --color-link: #9b4dca;
    }

    a {
      color: var(--color-link);
      text-decoration: none;
      cursor: pointer;
    }

    .header {
      border-bottom: 1px solid #ccc;
      padding: 0 1em;
      display: flex;
      justify-content: space-between;
      line-height: 1;
    }

    .identity h1 {
      font-size: 1.5em;
      gap: 0.6em;
      display: flex;
      line-height: 1;
    }

    .navigation ul,
    .navigation li {
      margin: 0;
      padding: 0;
    }

    .navigation li {
      display: inline-block;
      margin: 1.4em 1em 1em 1em;
    }
  `;
  _selected: string = 'main';

  render() {
    return html` <header class="header">
      <div class="identity">
        <h1><slot></slot><a id="main">Site Name</a></h1>
      </div>
      <nav class="navigation">
        <ul class="nav">
          <li><a id="about">About</a></li>
          <li><a id="news">News</a></li>
          <li><a id="contact">Contact</a></li>
        </ul>
      </nav>
    </header>`;
  }
  // connectedCallback() {
  //   if (this.shadowRoot) {
  //     Array.from(this.shadowRoot.querySelectorAll('a')).forEach((node) =>
  //       node.addEventListener('click', (e) => {
  //         this.handleClick(e, node.id);
  //       })
  //     );
  //   }
  // }

  private handleClick(e: Event, type: string) {
    e.preventDefault();
    e.stopPropagation();

    this._selected = type;
    const event = new CustomEvent('header-navigation', { detail: type });
    this.dispatchEvent(event);
  }

  // disconnectedCallback() {
  //   if (this.shadowRoot) {
  //     Array.from(this.shadowRoot.querySelectorAll('a')).forEach((node) =>
  //       node.removeEventListener('click', (e) => {
  //         this.handleClick(e, node.id);
  //       })
  //     );
  //   }
  // }
}

export default CustomHeader;

declare global {
  interface HTMLElementTagNameMap {
    'custom-header': CustomHeader;
  }
}
