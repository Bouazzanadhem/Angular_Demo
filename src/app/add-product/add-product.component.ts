import { CRUDService } from './../services/crud.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  submitted= false;
  addprodForm: FormGroup = new FormGroup({
    Name: new FormControl('',[Validators.required]),
    Discription: new FormControl('',[Validators.required]),
    Quantity: new FormControl('',[Validators.required]),
    Price: new FormControl('',[Validators.required])
  })
  constructor(public route: Router,private snackbar:MatSnackBar, private productService:CRUDService) { }
  ngOnInit(): void {
  }
  addproduit(){
    this.submitted = true;
    if(this.addprodForm.invalid){
      return;
    }
    this.productService.addProduct(this.addprodForm.value)
    this.route.navigate(['ListProduct'])
    this.snackbar.open("added", "close", {
      duration: 2000,

    });
  }

}
