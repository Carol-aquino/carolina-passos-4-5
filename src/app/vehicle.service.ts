import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private api = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  getVehicles() {
    return this.http.get<any>(`${this.api}/vehicles`);
  }

  getVehicleData(vin: string) {
    return this.http.post<any>(`${this.api}/vehicleData`, {
      vin: vin
    });
  }

}