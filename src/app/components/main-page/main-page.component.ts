import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-page',
  template: `
    <main>
      <div class="text">
        <h1>Стильный электросамокат с мощным аккумулятором</h1>
        <h3>Улучшенная производительность <br> для дальних путешествий. <br> Работает так же просто,<br> как и выглядит.</h3>
        <div class="buttons">
          <button>Белый</button>
          <button>Черный</button>
        </div>
      </div>
      <div class="vector-spring-main">
        <div class="image">
          <img src="../../../assets/image/white.webp" alt="">
        </div>
        <svg height="52.917vw" viewBox="0 0 749 792" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M347.687 -30.7567C348.373 -31.2203 348.554 -32.1527 348.09 -32.8393C347.627 -33.5258 346.694 -33.7066 346.008 -33.243C300.842 -2.7437 234.623 43.8173 189.19 86.9119C166.509 108.425 148.828 129.238 141.645 146.872C138.045 155.71 137.004 163.94 139.505 171.111C142.018 178.319 147.996 184.141 157.75 188.376C166.856 192.33 179.653 194.257 194.666 194.79C197.841 194.902 201.121 194.953 204.494 194.946L205.277 191.944C201.662 191.96 198.155 191.912 194.773 191.792C179.871 191.263 167.527 189.351 158.945 185.624C149.698 181.609 144.494 176.307 142.338 170.123C140.169 163.904 140.972 156.477 144.424 148.004C151.345 131.012 168.602 110.575 191.254 89.0884C236.488 46.183 302.519 -0.255997 347.687 -30.7567ZM247.333 189.561L246.503 192.654C283.1 189.192 323.703 182.398 357.826 176.436C362.35 175.646 366.759 174.87 371.029 174.119L371.073 174.111L371.108 174.105L371.11 174.105L371.116 174.104C383.07 172.001 393.937 170.089 403.197 168.578C415.827 166.518 425.332 165.227 430.504 165.188C431.643 165.179 432.506 165.233 433.115 165.333C432.727 165.684 432.144 166.128 431.317 166.667C426.794 169.619 416.612 174.416 399.272 181.615C330.871 210.012 201.726 294.124 108.996 379.318C62.6519 421.896 25.2236 464.903 9.09844 501.491C1.03185 519.794 -1.79289 536.691 2.48892 551.19C5.39348 561.025 11.5223 569.608 21.2316 576.703L23.3427 574.53C13.877 567.709 8.08462 559.545 5.36608 550.34C1.36802 536.802 3.91777 520.685 11.8437 502.701C27.7035 466.715 64.7321 424.059 111.026 381.527C203.572 296.502 332.427 212.615 400.422 184.386C417.707 177.21 428.158 172.31 432.957 169.18C434.155 168.398 435.102 167.662 435.717 166.966C436.242 166.371 437.005 165.242 436.405 163.998C436.134 163.437 435.675 163.092 435.273 162.881C434.867 162.667 434.407 162.53 433.947 162.436C433.027 162.247 431.846 162.178 430.481 162.188C425.032 162.229 415.286 163.566 402.714 165.618C393.433 167.132 382.537 169.049 370.576 171.153L370.571 171.154C366.28 171.909 361.851 172.688 357.31 173.481C323.531 179.383 283.508 186.08 247.333 189.561ZM84.4985 655.041C106.235 637.034 131.936 619.108 159.313 602.053L159.5 602L176 592L177.373 591.067C185.415 586.287 193.554 581.594 201.736 577.005C244.598 552.966 288.682 531.779 326.22 516.14C363.698 500.525 394.817 490.369 411.683 488.509C413.861 488.269 415.727 488.196 417.28 488.295C418.814 488.393 420.143 488.663 421.181 489.184C422.258 489.725 423.087 490.579 423.369 491.783C423.634 492.917 423.345 494.085 422.832 495.161C421.817 497.297 419.581 499.788 416.483 502.515C413.343 505.278 409.175 508.405 404.117 511.796C384.949 524.649 352.633 541.548 313.859 557.145L311.995 554.661C350.969 539.034 383.377 522.091 402.447 509.304C407.44 505.956 411.493 502.91 414.501 500.263C417.549 497.58 419.385 495.425 420.123 493.873C420.488 493.106 420.496 492.671 420.448 492.466C420.416 492.33 420.321 492.109 419.834 491.865C419.307 491.6 418.431 491.374 417.089 491.289C415.765 491.205 414.083 491.263 412.012 491.491C395.623 493.299 364.865 503.289 327.374 518.909C289.943 534.504 245.965 555.64 203.203 579.622C195.834 583.754 188.503 587.971 181.248 592.258L181.36 592.239L174 596.5L174.097 596.521C141.886 615.899 111.477 636.588 86.4123 657.351C53.83 684.342 30.5335 711.256 23.7918 735.404C20.437 747.42 21.5739 757.107 26.7462 764.761C31.9544 772.468 41.4331 778.386 55.3285 782.427C83.144 790.517 127.822 790.851 188.177 783.947C298.463 771.332 460.397 734.642 665.619 678H676.87C466.658 736.294 300.909 774.071 188.518 786.928C128.122 793.836 82.9252 793.577 54.4907 785.308C40.261 781.169 30.021 774.965 24.2605 766.441C18.4639 757.862 17.3821 747.205 20.9023 734.597C27.9106 709.494 51.8632 682.075 84.4985 655.041ZM749 657.684C920.997 608.417 1019.97 573.3 1074.53 549.378C1103.02 536.889 1119.51 527.405 1127.97 520.491C1132.15 517.07 1134.6 514.1 1135.37 511.522C1135.77 510.175 1135.74 508.871 1135.17 507.708C1134.62 506.568 1133.66 505.746 1132.54 505.168C1131.8 504.787 1130.9 505.075 1130.51 505.811C1130.13 506.547 1130.42 507.452 1131.16 507.833C1131.89 508.213 1132.29 508.627 1132.47 509.013C1132.65 509.376 1132.73 509.889 1132.5 510.663C1132 512.326 1130.17 514.813 1126.07 518.169C1117.95 524.809 1101.77 534.161 1073.33 546.631C1019.04 570.434 920.445 605.433 749 654.563V657.684ZM261.827 572.647L263.882 575.143C252.346 578.815 240.534 582.238 228.577 585.307L227.094 582.59C238.849 579.588 250.468 576.241 261.827 572.647ZM433.662 164.719C433.663 164.719 433.659 164.731 433.644 164.755C433.653 164.731 433.661 164.718 433.662 164.719Z"
                fill="#FF4C0D"/>
        </svg>
      </div>
    </main>
  `,
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {


  }

}