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

    const styles = document.getElementsByTagName('link');
    console.log(styles);
    // if (styles) this.shadowRoot?.appendChild(styles[0].cloneNode(true));

    const themeColor: { [k: string]: string[] } = {
      'BLUE': ['bg-primary', 'text-white'],
      'WHITE': ['bg-white', 'text-primary']
    }

    var _class: string[] = themeColor[args.theme || 'BLUE'];

    _class = _class.concat(['p-16', 'm-0', 'rounded-pill', 'text-center', 'border-0', 'w-100']);

    if(args.className)
      _class = args.className.split(' ');
    // cria os elementos filhos do heading e o heading
    const _button = BuilderElement('button', {
      className: _class,
      innerText: args.label,
      onclick: args.onclick,
      style: {
        letterSpacing: "0.0125rem",
        fontWeight: (args.try)?700:400,
        fontSize: "1.25rem",
        lineHeight: "1.25rem"
      }
    });

    if (this.shadowRoot) {
      this.shadowRoot.appendChild(_button);
    }
  }
}

customElements.define("app-button", ButtonComponent);
