import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-coursel-slide',
  templateUrl: './coursel-slide.component.html',
  styleUrls: ['./coursel-slide.component.scss'],
})
export class CourselSlideComponent implements OnInit {
  customOptions: OwlOptions = {
    items: 1,
    loop: true,
    autoplay: true,
    nav: false,
    dots: false,
    autoplayTimeout: 5000,
  };

  slidesStore: any = [{ path: 'slide-first' }, { path: 'slide-second' }];

  constructor() {}

  ngOnInit(): void {}
}
