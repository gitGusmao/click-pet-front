import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/partner/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productList: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadFeaturedProduct();
  }

  private loadFeaturedProduct() {
    this.productService.getAllProduct().subscribe((data) => {
      this.productList = data.body.content;
    });
  }
}
