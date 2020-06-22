import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroHeading: string;
  heroText: string;
  heroBtnText: string;
  heroBtnUrl: string;

  constructor() {
    this.heroHeading = "MountainTravel";
    this.heroText = "Ain't no Mountain high enough for us. Trust the best for you mountain adventures!";
    this.heroBtnText = "Get more information";
    this.heroBtnUrl = "https://codefactory.wien";
   }

  ngOnInit() {
    this.heroHeading = "MountainTravel";
    this.heroText = "Ain't no Mountain high enough for us. Trust the best for you mountain adventures!";
    this.heroBtnText = "Get more information";
    this.heroBtnUrl = "https://codefactory.wien";
  }

}
