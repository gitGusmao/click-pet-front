import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss'],
})
export class PartnerComponent implements OnInit {

  menuItens: any[];

  constructor(private navService: NavigationService) {}

  ngOnInit(): void {
    this.menuItens = this.navService.defaultMenu;
  }
}
