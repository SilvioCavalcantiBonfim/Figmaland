import { BuilderElement } from "../builder/BuilderElement.builder.js";

class PricingComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const attr = {};
    this.getAttributeNames().forEach((_attr) => attr[_attr] = this.getAttribute(_attr))
    this.render(attr);
  }

  render(args) {
    // cria os elementos filhos do heading e o heading
    const _subtitle = BuilderElement("h6", {
      className: ["m-0","text-center"],
      style: {
        fontFamily: 'Graphik',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '23px',
        letterSpacing: '0.1px',
      },
      innerText: args.subtitle ?? 'subtitle',
    });
    
    const _title = BuilderElement("h3", {
      className: ["d-flex", "flex-column", "align-items-center"],
      style: {
        fontFamily: "Graphik",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "28px",
        letterSpacing: "0.1px",
        padding: "0.625rem",
        margin: 0,
      },
      innerText: args.title ?? 'title',
    });
    
    const _heading = BuilderElement("div", {
      className: ['d-flex','flex-column','align-items-center'],
      appendChild: [_title, _subtitle]
    });
    
    const _container = BuilderElement("article", {
      className: ['d-flex','flex-column','w-100','align-items-center'],
      style:{
        color: args.color ?? '#000000',
        backgroundColor: args.bg ?? '#FFFFFF',
        maxWidth: "20.9375rem",
        padding: "2.5rem",
        borderRadius: "0.625rem",
      },
      appendChild: [_heading]
    });

    this.shadowRoot.innerHTML += `<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'>`;
    this.shadowRoot.appendChild(_container);
  }
}

// Registrar o componente personalizado
customElements.define("app-pricing", PricingComponent);
