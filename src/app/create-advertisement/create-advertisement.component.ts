import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Advertisement } from './advertisement';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.css']
})
export class CreateAdvertisementComponent implements OnInit {

  adObj = new Advertisement();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  createAdvertisement(){
    // Logic to create advertisement.
    console.log(this.adObj.advertisementName);
  }

  onImgChange(event){
    // On Uploading any image for exercise
    const uploadFile: any = document.querySelector('#file');
    this.adObj.advertisementImg = uploadFile.files[0];
    console.log(this.adObj.advertisementImg.name);
  }

}
