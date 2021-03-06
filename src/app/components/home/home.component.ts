import { Component, OnInit } from '@angular/core';
import { YoniService } from 'src/app/core/yoni.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private yoniService: YoniService) {
    yoniService.log();
  }

  ngOnInit() {}
}
