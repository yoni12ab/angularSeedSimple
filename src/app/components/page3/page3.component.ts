import { Component, OnInit } from '@angular/core';
import { RoniService } from 'src/app/core/roni.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {
  constructor(private roniService: RoniService) {}

  ngOnInit() {}
}
