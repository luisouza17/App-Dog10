import { Component, OnInit } from '@angular/core';
import { HotdogService } from '../services/hotdog.service';
import { LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.page.html',
  styleUrls: ['./add-dog.page.scss'],
})
export class AddDogPage implements OnInit {

  constructor(private dogService:HotdogService, private loader:LoadingController,private nav:NavController,private toast:ToastController) { }

  ngOnInit() {
  }

  async cadastrar(form){
    const dog = form.value
  let spin= await this.loader.create({
      message: "Salvado Hotdog..",
    })

    spin.present();
    await this.dogService.addDog(dog);
    spin.dismiss();
    this.nav.back();
   let t = await this.toast.create({
      message: "Hot dog cadastrado com sucesso!",
      duration: 3000
    })
    t.present();
  }
}
