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
    // cria os elementos filhos do heading e o heading
    const _img = BuilderElement('img', {
      src: args.src,
      alt: args.alt
    });
    const _title = BuilderElement('h6', {
      className: ['text-center', 'm-0'],
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
      this.shadowRoot.innerHTML += `<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'>
    <link rel="stylesheet" href="/css/style.css" />
      <link rel="stylesheet" href="/css/font.css" />
      <link rel="stylesheet" href="/css/variable.css" />`;
      this.shadowRoot.appendChild(_container);
    }
  }
}

customElements.define("app-client", ClientComponent);
