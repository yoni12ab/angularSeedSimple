import { Component, OnInit } from '@angular/core';
import { RoniService } from 'src/app/core/roni.service';
import { YoniService } from 'src/app/core/yoni.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  constructor(private yoniService: YoniService) {
    yoniService.log();
  }

  ngOnInit() {}
}
