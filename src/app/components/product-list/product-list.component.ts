import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: any[] = [];
  categories: string[] = [];
  loading = true;
   selectedCategory = 'all';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadAllProducts();
  }

  loadCategories() {
    this.productService.getCategories().subscribe(res => {
      this.categories = res;
    });
  }

  loadAllProducts() {
    this.loading = true;
    this.selectedCategory = 'all';
    this.productService.getProducts().subscribe(res => {
      this.products = res;
      this.loading = false;
    });
  }

  filterByCategory(category: string) {
    this.loading = true;
    this.selectedCategory = category;

    this.productService.getProductsByCategory(category).subscribe(res => {
      this.products = res;
      this.loading = false;
    });
  }
}
