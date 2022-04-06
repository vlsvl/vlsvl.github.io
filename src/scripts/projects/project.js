export default class Project {
  constructor(data) {
    this.name = data.name
    this.private = data.private
    this.full_name = data.full_name
    this.languages_url = data.languages_url
    console.log(this)
  }

  draw(parentSelector, splide) {
    const parent = document.querySelector(parentSelector)
    let container = document.createElement('li')

    container.innerText = this.name
    container.classList.add('project')
    container.classList.add('splide__slide')
    container.role = 'tabpanel'
    container.innerHTML = `
            <div class="project__img">
              <svg
                 class="project__icon"
                 xmlns="http://www.w3.org/2000/svg"
                 width="512"
                 height="512"
                 viewBox="0 0 512 512">
                <path
                   style="fill:#2980b9;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                   d="m 55.066853,94.276715 c -7.824275,0 -14.123816,6.297845 -14.123816,14.122115 l 0,37.32867 0,120.13243 0,121.5455 0,7.30708 c 0,5.98757 4.819796,10.80737 10.807375,10.80737 l 408.499318,0 c 5.98757,0 10.80907,-4.8198 10.80907,-10.80737 l 0,-128.85257 -0.002,0 0,-120.13243 c 0,-11.78329 -9.48585,-21.26915 -21.26914,-21.26915 l -218.96832,0 c -5.81617,0 -8.11397,-0.68519 -11.8386,-4.18889 L 197.01302,98.500575 c -0.0748,-0.0762 -0.15164,-0.15024 -0.22814,-0.22473 l -0.0443,-0.0426 -0.002,0.002 c -2.53734,-2.44894 -5.98807,-3.95828 -9.80972,-3.95828 z"/>
                <path
                   style="opacity:0.3;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                   d="m 28.241425,148.07206 c -12.87594,0 -23.24141,9.6069 -23.24141,21.54052 l 16,244.76159 0,7.4003 c 0,6.06398 5.26673,10.94526 11.80953,10.94526 l 446.379045,0 c 6.54281,0 11.81139,-4.88128 11.81139,-10.94526 l 15.998,-252.16189 c 0,-11.93362 -10.36547,-21.54052 -23.24141,-21.54052 l -455.515295,0 z"
                   id="rect2982-5"
                   transform="matrix(0.88626203,0,0,0.86265191,29.117811,27.075351)" />
                <path
                   style="fill:#4aaee8;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                   d="m 47.569942,157.23082 c -11.783285,0 -21.269144,8.79166 -21.269144,19.7126 l 14.642239,223.99111 0,6.77231 c 0,5.54939 4.819796,10.01644 10.807375,10.01644 l 408.499318,0 c 5.98757,0 10.80907,-4.46705 10.80907,-10.01644 l 14.64041,-230.76343 c 0,-10.92094 -9.48585,-19.71259 -21.26914,-19.71259 l -416.860264,0 z"
                   id="rect2982" />
              </svg>
            </div>
            <div class="project__info">
              <h4 class="project__title">${this.name}</h4>
              <div class="description">Test text</div>
            </div>
    `
    splide.add(container)
  }
}
