import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/partner/category.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  categoryList: any;
  categoryId: any;

  private userToken!: string;

  constructor(
    private categoryService: CategoryService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.userToken = this.authService.getToken;
    this.categoryId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.loadProductByCategory();
  }

  private loadProductByCategory() {
    this.categoryService
      .getRecordByIdNoToken(this.categoryId)
      .subscribe((data) => {
        this.categoryList = data.body;
      });
  }
}
