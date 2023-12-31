import { BuilderElement } from "../builder/BuilderElement.builder";

class ClientComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const attr: { [key: string]: any } = {};
    this.getAttributeNames().forEach(
      (_attr) => (attr[_attr] = this.getAttribute(_attr))
    );
    this.render(attr);
  }

  render(args: { [key: string]: any }) {
    const link = document.getElementsByTagName('link');
    if (link) this.shadowRoot?.appendChild(link[0].cloneNode(true));
    const styles = document.getElementsByTagName('style');
    if (styles) this.shadowRoot?.appendChild(styles[0].cloneNode(true));

    // cria os elementos filhos do heading e o heading
    const _img = BuilderElement('img', {
      src: args.src,
      alt: args.alt,
      width: args.width,
      height: args.height,
    });
    const _title = BuilderElement('p', {
      className: ['text-center', 'm-0', 'title-6'],
      innerText: args.title || 'Client Name'
    })
    const _container = BuilderElement('div', {
      className: ['d-flex', 'flex-column'],
      style: {
        padding: "1.5625rem 2.5rem",
        gap: "0.9375rem",
        maxWidth: "17.1875rem",
        border: "1px solid #D8D8D8"
      },
      appendChild: [_title, _img]
    });

    if (this.shadowRoot) {
      this.shadowRoot.appendChild(_container);
    }
  }
}

customElements.define("app-client", ClientComponent);
