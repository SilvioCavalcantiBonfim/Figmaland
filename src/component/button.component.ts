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

    const link = document.getElementsByTagName('link');
    if (link) this.shadowRoot?.appendChild(link[0].cloneNode(true));

    const styles = document.getElementsByTagName('style');
    if (styles) this.shadowRoot?.appendChild(styles[0].cloneNode(true));
    

    const themeColor: { [k: string]: string[] } = {
      'BLUE': ['bg-primary', 'text-white'],
      'WHITE': ['bg-white', 'text-primary']
    }

    var _class: string[] = themeColor[args.theme || 'BLUE'];

    _class = _class.concat(['p-16', 'm-0', 'rounded-pill', 'text-center', 'border-0', 'w-100', 'position-relative', args.theme === 'WHITE'?'hover-black':'hover']);

    if(args.className)
      _class = args.className.split(' ');
    // cria os elementos filhos do heading e o heading
    const _button = BuilderElement('button', {
      className: _class,
      onclick: args.onclick,
      style: {
        letterSpacing: "0.0125rem",
        fontWeight: (args.try)?700:400,
        fontSize: "1.25rem",
        lineHeight: "1.25rem"
      },
      appendChild: [BuilderElement('span', {innerText: args.label, style: {zIndex: 2, position: 'relative'}})]
    });

    if (this.shadowRoot) {
      this.shadowRoot.appendChild(_button);
    }
  }
}

customElements.define("app-button", ButtonComponent);
