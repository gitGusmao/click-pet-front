import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/partner/category.service';

@Component({
  selector: 'app-coursel',
  templateUrl: './coursel.component.html',
  styleUrls: ['./coursel.component.scss'],
})
export class CourselComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 16,
    navSpeed: 700,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 5,
      },
    },
    nav: true,
  };

  categoryList: any;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategory();
  }

  private loadCategory() {
    this.categoryService.getAllRecordNoToken().subscribe((data) => {
      this.categoryList = data.body;
    });
  }
}
