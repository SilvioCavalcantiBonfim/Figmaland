import { BuilderElement } from "../builder/BuilderElement.builder";

class ButtonComponent extends HTMLElement {
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
    const themeColor: {[k: string]: any} = {
      'BLUE': {
        backgroundColor: "var(--primary)",
        color: "#ffffff"
      },
      'WHITE': {
        color: "var(--primary)",
        backgroundColor: "#ffffff"
      }
    }

    const _button = BuilderElement('button', {
      className: ((args.className)?args.className+ ' ':'') + 'rounded-pill',
      innerText: args.label,
      onclick: args.onclick,
      style: {
        fontFamily: "Graphik",
        padding: "1rem",
        fontStyle: "normal",
        letterSpacing: "0.0125rem",
        margin: "0 !important",
        fontWeight: (args.try)?700:400,
        backgroundColor: themeColor[args.theme || 'BLUE'].backgroundColor || themeColor[args.theme].backgroundColor,
        fontSize: "1.25rem",
        lineHeight: "1.25rem",
        width: "100%",
        border: "0",
        textAlign: "center",
        color: themeColor[args.theme || 'BLUE'].color || themeColor[args.theme].color
      }
    });

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'>
      <link rel="stylesheet" href="/css/variable.css" />`;
      this.shadowRoot.appendChild(_button);
    }
  }
}

customElements.define("app-button", ButtonComponent);
