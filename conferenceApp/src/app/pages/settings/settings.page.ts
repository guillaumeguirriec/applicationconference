import { Component, OnInit } from '@angular/core';

import { DeviceInfo, NetworkStatus } from '@capacitor/core';
import { DeviceService } from 'src/app/services/device/device.service';
import { NetworkService } from 'src/app/services/network/network.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  platform = '';
  osVersion = '';
  uuid = '';
  model = '';
  connectionType = '';

  constructor(private deviceService: DeviceService, private networkService: NetworkService) {}

  async ngOnInit() {
    const deviceInfo: DeviceInfo = await this.deviceService.getDeviceInfo();
    const networkStatus: NetworkStatus = await this.networkService.getNetworkStatus();
    this.platform = deviceInfo.platform;
    this.osVersion = deviceInfo.osVersion;
    this.uuid = deviceInfo.uuid;
    this.model = deviceInfo.model;
    this.connectionType = networkStatus.connectionType;
  }

}
