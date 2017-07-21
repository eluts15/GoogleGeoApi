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
  location: any[]=null;
  constructor(private locationService: LocationService) { }

  getLocationInfo(lat: string, lng: string) {
    this.locationService.getByLatLng(lat, lng).subscribe(response => {
      this.location = response.json();
      console.log(location)
    });
  }

}
