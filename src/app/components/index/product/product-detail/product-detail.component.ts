import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/partner/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  productDetail: any;
  private productSlug: any;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.productSlug = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.loadProductBySnug();
  }

  private loadProductBySnug() {
    this.productService.getRecordByIdNoToken(this.productSlug).subscribe((data) => {
      this.productDetail = data.body;
    });
  }
}
