import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Provider } from '../../../providers/provider';
import { Character } from '../character';

@Component({
    selector: 'detail',
    templateUrl: 'detail.html',
})
export class Detail {
    /* id para testes: 1011334 */

    private character = {
        id: 0,
        comics: {
            available: 0, 
            collectionURI: '', 
            items: [], 
            returned: 0
        },
        description: '',
        events: {
            available: 0, 
            collectionURI: '', 
            items: [], 
            returned: 0
        },
        modified: '',
        name: '',
        resourceURI: '',
        series: {
            available: 0, 
            collectionURI: '', 
            items: [], 
            returned: 0
        },
        stories: {
            available: 0, 
            collectionURI: '', 
            items: [], 
            returned: 0
        },
        thumbnail: {
            path: '', 
            extension: ''
        },
        urls : []
    }
    
    private comics    : any=[];
    private id        : number;

    private checking  = true;
    
    constructor(private navCtrl: NavController, private navParams: NavParams, private provider: Provider) {
        
        this.id = this.navParams.get('id');
        /* caso - via url */
        if(this.id){
            this.provider.getCharacterById(this.id).then(character => {
                this.character = character[0];
                
                if(this.character){
                    this.getComicsByCharacter();
                }

            });
        
        /* caso - via clique lista */
        } else {
            /* get objeto personagem */
            this.character = this.navParams.get('character') || this.character;
            
            /* corrige url */
            this.navParams.data.id = this.character.id;
            this.id                = this.character.id;

            if(this.character){
                this.getComicsByCharacter();
            }
        }
    }

    private voltar(){
        this.navCtrl.pop() || this.navCtrl.setRoot(Character);
    }

    /* *RECUPERA PERSONAGENS */
    public getComicsByCharacter(){
        this.checking = true;

        this.provider.getComicsByCharacter(this.character).then((comics) => {
            this.comics = comics;
            this.checking = false;
        });
    }
}