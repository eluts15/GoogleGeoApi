import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-geo-form',
  templateUrl: './geo-form.component.html',
  styleUrls: ['./geo-form.component.css'],
  providers: [ LocationService ]
})

export class GeoFormComponent {
  //Observables
  location: any[]=null;
  latLng: any[]=null;
  //notfound: boolean=false;

  constructor(private locationService: LocationService) { }

  getPhysicalAddress(lat: string, lng: string) { //Return a physical address.
    this.locationService.getPhysicalAddress(lat, lng).subscribe(response => {
      this.location = response.json();
    });
  }

  // if(response.json().photos.length > 0)
  //     {
  //       this.photos = response.json();
  //     }
  //     else {
  //       this.noPhotos = true;
  //     }

  getCoordinates(address: string) { // Return lat and long coordinates.
    let jsonObj = address.split(' ').join('+');
    this.locationService.getCoordinates(jsonObj).subscribe(response => {
      this.latLng = response.json();
    });
  }
}
