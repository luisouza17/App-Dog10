import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route:ActivatedRoute,private router:Router) { }

  hotdogList:Array<Object> = [
    {
      "title": "Upper Dog",
      "description": "Com os melhores ingredientes do mercado e em parceira com a renomada Red Nose, O Upper HotDog conta com toda suculência e sabor que você deseja a cada mordida!",
      "price": "R$ 16,00",
      "image": "../assets/image/hot1.jpg",
    },
    {
      "title": "New York",
      "description": "Com os melhores ingredientes do mercado e em parceira com a renomada Red Nose, O New York conta com toda suculência e sabor que você deseja a cada mordida!",
      "price": "R$ 15,00",
      "image": "../assets/image/hot3.jpg",
    },
    {
      "title": "Mr.Andrew",
      "description": "O Mr.Andrew te levará para outra dimensão a cada mordida.",
      "price": "R$ 15,00",
      "image": "../assets/image/hot2.png",
    }
  ]

  detalhes(title, image, price){
    this.router.navigate(['/finalizar-pedido', title, image, price ]);
  }
}
