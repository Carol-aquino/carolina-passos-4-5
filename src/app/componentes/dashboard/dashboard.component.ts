import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VehicleService } from '../../vehicle.service';
import { Vehicle } from '../../vehicle';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  vehicles: Vehicle[] = [];

  selectedVehicle!: Vehicle;

  vin = '';

  vehicleData: any = null;

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {

    this.vehicleService.getVehicles().subscribe(res => {

      this.vehicles = res.vehicles;

      this.selectedVehicle = this.vehicles[0];

    });

  }

  onVehicleChange(index: string){

    this.selectedVehicle = this.vehicles[+index];

  }

  buscarVIN(){

    this.vehicleService.getVehicleData(this.vin).subscribe({

      next:(res)=>{

        this.vehicleData = res;

      },

      error:()=>{

        alert("VIN não encontrado!");

      }

    });

  }

}