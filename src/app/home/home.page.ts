import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotdogService } from '../services/hotdog.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route:ActivatedRoute,private router:Router,private hotdogService:HotdogService) { }

  hotdogs = [];

  ionViewDidEnter(){
    this.hotdogService.getDogs().subscribe(resposta =>{
      this.hotdogs = resposta;
    })
  }

  detalhes(title, image, price){
    this.router.navigate(['/finalizar-pedido', title, image, price ]);
  }
}
