import { Injectable } from '@angular/core';
import { AdminAdvertise } from './admin-advertisement';

@Injectable({
  providedIn: 'root'
})
export class AdminAdvertisementService {
    
  adList: Array<AdminAdvertise> = [];
  maxId: number = 100;

  constructor() { 

    let ad1: AdminAdvertise = new AdminAdvertise();
    ad1.id = 1;
    ad1.name = "Advertise 1";
    ad1.img = "assets/images/product.jpeg";
    ad1.isAdmin = true;
    ad1.price = 35;

    let ad2: AdminAdvertise = new AdminAdvertise();
    ad2.id = 2;
    ad2.name = "Advertise 2";
    ad2.img = "assets/images/product.jpeg";
    ad2.isAdmin = true;
    ad2.price = 30;

    let ad3: AdminAdvertise = new AdminAdvertise();
    ad3.id = 3;
    ad3.name = "Advertise 3";
    ad3.img = "assets/images/product.jpeg";
    ad3.isAdmin = true;
    ad3.price = 45;

    let ad4: AdminAdvertise = new AdminAdvertise();
    ad4.id = 4;
    ad4.name = "Advertise 4";
    ad4.img = "assets/images/product.jpeg";
    ad4.isAdmin = true;
    ad4.price = 25;

    this.adList.push(ad1);
    this.adList.push(ad2);
    this.adList.push(ad3);
    this.adList.push(ad4);
  }

  deleteAd(id: number) {
    this.adList.forEach((ad, currentIndex) => {
      if (ad.id == id) {
        this.adList.splice(currentIndex, 1);
      }
    });
  }

  createAd(newAd: AdminAdvertise) {
    newAd.id = this.nextId();
    this.adList.push(newAd);
  }

  public nextId(): number{
    this.maxId++;
    return this.maxId;
  }

}
