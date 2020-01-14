import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Criando variáveis públicas pois o que for digitado será capturado, salvo nelas, e exibido no DOM
  public cpfUser: string;
  public nascimentoUser: string;
  public cellUser: string;
  public cepUser: string;

  constructor() {}

  capturaValor(){
    // Capturando campos através do ID no HTML
    var cpfUser = (<HTMLInputElement>document.getElementById('cpfUser'));
    var nascUser = (<HTMLInputElement>document.getElementById('nascUser'));
    var cellUser = (<HTMLInputElement>document.getElementById('cellUser'));
    var cepUser = (<HTMLInputElement>document.getElementById('cepUser'));

    // Atribuindo o valor dos campos as variáveis públicas (somente para testar exibindo no DOM)
    this.cpfUser = cpfUser.value;
    this.nascimentoUser = nascUser.value;
    this.cellUser = cellUser.value;
    this.cepUser = cepUser.value;
  }

}
