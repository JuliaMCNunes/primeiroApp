import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  resultado: string
  imc_valor: string
  peso: string
  altura: string
  image: any = "assets/img/Tabela.png"

  constructor(private alertController: AlertController) {}
  
  imc(){
    var n1 = parseFloat(this.peso)
    var n2 = parseFloat(this.altura)
    var cal_imc = n1 / (n2 * n2)
    this.imc_valor = cal_imc.toFixed(1)

    if (cal_imc > 17 && cal_imc < 18.49){
      this.image = 'assets/img/Magreza.png'}

    if (cal_imc > 18.5 && cal_imc < 24.9){
     this.image = 'assets/img/Saudavel.png'}

    if (cal_imc > 25 && cal_imc < 29.99){
      this.image = 'assets/img/Obesidade Grau 1.png'}

    if (cal_imc > 30 && cal_imc < 39.99){
      this.image = 'assets/img/Obesidade Grau 2.png'}

    if (cal_imc > 40){
      this.image = 'assets/img/Obesidade Grau 3.png'}

    }

}
