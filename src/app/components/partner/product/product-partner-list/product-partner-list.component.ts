import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/partner/product.service';

@Component({
  selector: 'app-product-partner-list',
  templateUrl: './product-partner-list.component.html',
  styleUrls: ['./product-partner-list.component.scss'],
})
export class ProductPartnerListComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'id'];
  dataSource: any;

  private userToken!: string;

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private router: Router
  ) {
    this.userToken = this.authService.getToken;
  }

  ngOnInit(): void {
    this.loadFeaturedProduct();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteProduct(productId: any) {
    this.productService
      .deleteRecord(productId, this.userToken)
      .subscribe((data) => {});
  }

  editProduct(productId: any) {
    this.router.navigate(['/partner/product/product-register', productId]);
  }

  private loadFeaturedProduct() {
    this.productService.getAllProduct().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data.body.content);
    });
  }
}
