import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { md5 } from '../../util/md5';

@Injectable()
export class Service {
    private publicKey  = '';
    private privateKey = '';
    
    constructor(private http: Http) {}
    
    getDados(url:string, parameters:string){
        let ts = this.generateTs();
        
        return new Promise((ret) => {
            this.http.get(url + '?ts=' + ts + '&apikey=' + this.publicKey + '&hash=' + this.getHash(ts) + parameters, 
            {}).map(map => map.json()).subscribe((response) => {
                if(response){
                    ret(response);
                } else {
                    ret(false);
                }
            }, (erro) => {
                ret(false);
            });
        });
    }

    private getHash(ts){
        return md5(ts + this.privateKey + this.publicKey);
    }

    private generateTs(){
		return Math.floor(100000 + Math.random() * 900000);
	}
}
