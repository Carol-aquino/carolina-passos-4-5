export interface Vehicle {
  id: number;

  vehicle: string;
  volumetotal: number;
  connected: number;
  softwareUpdates: number;

  img: string;

  vin: string;
  odometro: number;
  nivelCombustivel: number;
  status: string;
  lat: number;
  long: number;
}