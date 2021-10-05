import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'grid',
    templateUrl: 'grid.html',
})
export class Grid {
    public segment = '0';

    public imagens = [
        {
            path    : 'src/assets/img/imagens1.jpg',
            titulo  : 'Imagem 1'
        },
        {
            path    : 'src/assets/img/imagens2.jpg',
            titulo  : 'Imagem 2'
        }
    ]

    public pessoa = {
        nome : '',
        sexo : 'M',
        data : new Date(),
        rg   : '',
        cpf  : ''
    }

    public opcoes = [
        { valor : 'M', descricao : 'Masculino'},
        { valor : 'F', descricao : 'Feminino'}
    ]

    constructor() {
    }

    change(){
        console.log('segment change');
    }

    refresh(refresher){
        setTimeout(() => {
            refresher.complete();
        }, 2000);
    }

}