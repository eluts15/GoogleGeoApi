import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { geoKey } from './api-keys';

@Injectable()
export class LocationService {
  constructor(private http: Http) { }

  getLocation(lat: string, lng: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" +lat+ "," +lng+ "&key="+ geoKey);
  }

  getCoordinates(address: string) {
    return this.http.get("https://maps.googleapis.com/map/api/geocode/json?address=" +address+ "&key"+ geoKey);
  }
}
