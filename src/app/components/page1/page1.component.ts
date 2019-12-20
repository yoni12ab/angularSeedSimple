import { Component, OnInit } from '@angular/core';
import { YoniService } from '../../core/yoni.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  constructor(private yoniService: YoniService) {
    yoniService.log();
  }

  ngOnInit() {}
}
