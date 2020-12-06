import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminAdvertise } from 'app/admin-advertisement/admin-advertisement';
import { AdminAdvertisementService } from 'app/admin-advertisement/admin-advertisement.service';
import { Advertisement } from './advertisement';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.css']
})
export class CreateAdvertisementComponent implements OnInit {

  adObj = new Advertisement();

  constructor(private formBuilder: FormBuilder,
    private adService: AdminAdvertisementService,
    private router:Router) { }

  ngOnInit(): void {
  }

  createAdvertisement(){
    // Logic to create advertisement.
    let newAd = new AdminAdvertise();
    newAd.name = this.adObj.advertisementName;
    newAd.price = this.adObj.advertisementPrice;
    newAd.link = this.adObj.advertisementLink;
    newAd.img = "assets/images/product.jpeg";
    this.adService.createAd(newAd);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/admin'], { queryParams: { active: 3}});
  }

  onImgChange(event){
    // On Uploading any image for exercise
    const uploadFile: any = document.querySelector('#file');
    this.adObj.advertisementImg = uploadFile.files[0];
    console.log(this.adObj.advertisementImg.name);
  }

}
