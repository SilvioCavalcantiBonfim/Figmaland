import { BuilderElement } from "../builder/BuilderElement.builder";

class PricingComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const attr: {[key: string]: any} = {};
    this.getAttributeNames().forEach(
      (_attr) => (attr[_attr] = this.getAttribute(_attr))
    );
    this.render(attr);
  }

  render(args: {[key: string]: any}) {
    // cria os elementos filhos do heading e o heading
    const _heading = BuilderElement("div", {
      className: ["d-flex", "flex-column", "align-items-center"],
      appendChild: [
        // titulo
        BuilderElement("h3", {
          className: ["d-flex", "flex-column", "align-items-center"],
          innerText: args.title ?? "title",
        }),
        // subtitulo
        BuilderElement("h6", {
          className: ["m-0", "text-center"],
          innerText: args.subtitle ?? "subtitle",
        }),
      ],
    });

    //cria os elementos filhos do row e o row

    const _row = BuilderElement("div", {
      className: ["d-flex", "align-items-center"],
      style: { minWidth: "9.5625rem", maxWidth: "12.375rem" },
      appendChild: [
        BuilderElement("h1", { innerText: args.value || 0 }),
        BuilderElement("div", {
          className: [
            "mt-3",
            "d-flex",
            "flex-column",
            "justify-content-center",
          ],
          appendChild: [
            BuilderElement("div", {
              innerHTML: `<svg width="13" height="20" viewBox="0 0 13 20" fill="none">
              <path
              d="M6.26 19.4935V16.9935C4.58 16.8735 3.29333 16.4001 2.4 15.5735C1.52 14.7335 1.04667 13.6335 0.98 12.2735H4.68C4.8 13.3268 5.32667 13.9535 6.26 14.1535V11.2335C4.5 10.9801 3.23333 10.5068 2.46 9.81346C1.68667 9.10679 1.3 8.06679 1.3 6.69346C1.3 5.48012 1.74667 4.47346 2.64 3.67346C3.53333 2.87346 4.74 2.42012 6.26 2.31346V0.533457H7.82V2.33346C10.8333 2.58679 12.4533 4.02679 12.68 6.65346H9.06C8.92667 5.84012 8.51333 5.34012 7.82 5.15346V7.91346C9.48667 8.15346 10.7467 8.60012 11.6 9.25346C12.4533 9.90679 12.88 10.9201 12.88 12.2935C12.88 13.5868 12.4533 14.6668 11.6 15.5335C10.7467 16.4001 9.48667 16.8868 7.82 16.9935V19.4935H6.26ZM9.16 12.7335C9.16 12.3868 9.06667 12.1268 8.88 11.9535C8.69333 11.7668 8.34 11.6135 7.82 11.4935V14.1535C8.71333 13.9668 9.16 13.4935 9.16 12.7335ZM4.9 6.39346C4.9 6.75346 4.99333 7.03346 5.18 7.23346C5.38 7.42012 5.74 7.56679 6.26 7.67346V5.11346C5.35333 5.27346 4.9 5.70012 4.9 6.39346Z"
                fill="currentColor"
              />
              </svg>`,
            }),
            BuilderElement("h6", {
              className: ["m-0"],
              innerText: "Per Month",
            }),
          ],
        }),
      ],
    });

    //cria os elementos filhos do list e o list

    const _list = BuilderElement("div", {
      appendChild: (args.list || "" as string)
        .split(",")
        .map((e: string) =>
          BuilderElement("div", {
            className: ["text_content", "w-100"],
            innerText: e,
            style: { minHeight: "3rem" },
          })
        ),
    });

    // button build not working with app-button
    const _bt = document.createElement('app-button');
    _bt.setAttribute('label', 'Order Now');
    _bt.setAttribute('className', 'w-100');
    _bt.setAttribute('theme', (args.bg === '#2091F9')?'WHITE':'BLUE');
    _bt.style.width = '100%';

    //Cria o container principal
    const _container = BuilderElement("article", {
      className: [
        "pricing-style",
        "d-flex",
        "flex-column",
        "w-100",
        "align-items-center",
        "justify-content-center"
      ],
      style: {
        color: args.color ?? "#000000",
        backgroundColor: args.bg ?? "#FFFFFF",
      },
      appendChild: [_heading, _row, _list, _bt],
    });

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `<link rel="stylesheet" href="/Figmaland/styles.bundle.css" />`;
      this.shadowRoot.appendChild(_container);
    }
  }
}

customElements.define("app-pricing", PricingComponent);
