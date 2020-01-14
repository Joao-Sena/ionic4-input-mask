Este arquivo é para Ensinar a utilizar o pluguin NGX-MASK para aplicar máscaras em <ion-inputs>

Link Referência (documentação): https://www.npmjs.com/package/ngx-mask

Passos:
1 - Abra seu terminal na pasta do projeto em IONIC ou ANGULAR, e execute o comando 'npm install --save ngx-mask';
2 - Vá na página 'nomedapagina.module.ts' (você precisa importar no modulo de cada pagina que você vai utilizar esse pluguin, não precisa importar no app.module.ts)
3 - Nessa página cole o trecho: " import { NgxMaskModule } from 'ngx-mask'; "
4 - Depois no mesmo arquivo cole, no @NgModule({ imports: [ NgxMaskModule.forRoot({validation: true}) ] })
5 - Agora já está tudo pronto para usar a máscara, então abra o arquivo HTML que irá utilizar esse pluguin (nomedapagina.component.html
6 - No HTML no ion-input defina ele como ' type="text" ' e cole o atributo ' mask="000.000.000-00 '

7 - Alguns exemplo de ion-input:

    <ion-input id="cpfUser" type="text" inputmode="numeric" mask="000.000.000-00" placeholder="Seu CPF"></ion-input>
    <ion-input id="nascUser" type="text" inputmode="numeric" mask="00/00/0000" placeholder="Data nascimento"></ion-input>
    <ion-input id="cellUser" type="text" inputmode="numeric" mask="(00) 00000-0000" placeholder="Seu telefone"></ion-input>
    <ion-input id="cepUser" type="text" inputmode="numeric" mask="00000-000" placeholder="Seu CEP"></ion-input>
    
    
** Qualquer dúvida olhar nos arquivos deste próprio diretório que estão já os arquivos desenvolvidos e testados
