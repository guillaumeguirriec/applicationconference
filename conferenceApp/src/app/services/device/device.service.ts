import { Injectable } from '@angular/core';
import { Plugins, DeviceInfo } from '@capacitor/core';
const { Device } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() {}

  async getDeviceInfo() {
    return await Device.getInfo();
  }
}
