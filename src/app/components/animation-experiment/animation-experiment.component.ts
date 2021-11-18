// import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';
// import gsap from "gsap";
//
// @Component({
//   selector: 'app-animation-experiment',
//   templateUrl: './animation-experiment.component.html',
//   styleUrls: ['./animation-experiment.component.scss']
// })
// export class AnimationExperimentComponent implements OnInit, AfterViewInit {
//
//   title = false;
//   constructor() {}
//   @ViewChild('anima',{static:true})//#anima _______    -AfterViewInit
//   anima!: ElementRef<HTMLDivElement>
//   ngAfterViewInit(){
//     this.initialAnim()
//   }
//   initialAnim():void{
//     gsap.to(this.anima.nativeElement,{
//       delay:0.5,
//       duration:0.9,
//       x:'36vw',
//     })
//   }
//   ngOnInit(){}
//
// }
