import { Component, Input, OnInit } from '@angular/core';
import { AdminAdvertise } from './admin-advertisement';
import { AdminAdvertisementService } from './admin-advertisement.service';

@Component({
  selector: 'app-admin-advertisement',
  templateUrl: './admin-advertisement.component.html',
  styleUrls: ['./admin-advertisement.component.css']
})
export class AdminAdvertisementComponent implements OnInit {

  @Input() advertise: AdminAdvertise;
  
  constructor(private adService: AdminAdvertisementService) {
    
   }

  ngOnInit(): void {
  }

  delete(id: number){
    this.adService.deleteAd(id); 
  }

}
