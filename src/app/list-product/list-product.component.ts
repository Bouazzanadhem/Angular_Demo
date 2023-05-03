import { MatSnackBar } from '@angular/material/snack-bar';
import { CRUDService } from './../services/crud.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  constructor(
    private productService: CRUDService,
    private snackbar: MatSnackBar
    ) { }
    Products:any
  ngOnInit(): void {
   this.Products = this.productService.getAllProduct()
  }
  deleteProduct(i:number){
    this.productService.deleteProductByIndex(i)
      this.ngOnInit()
  }
}
