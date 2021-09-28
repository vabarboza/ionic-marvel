import { Injectable } from "@angular/core";
import { Service } from "./service/service";

import { Pagination } from '../util/pagination';

@Injectable()
export class Provider {
  constructor(private service: Service) {
  }
  
  public getAllCharacters(pagination: Pagination, filter: string){
    let strFilter = '';
    
    if(filter != ''){
      strFilter = '&nameStartsWith=' + filter;
    }

    let param = '&limit=' + pagination.getLimit() + '&offset=' + pagination.getOffset() + strFilter;
    return new Promise((ret) => {
      this.service.getDados('https://gateway.marvel.com/v1/public/characters', param).then((data: any) => {
        

        if(data && data.data && data.data.results){
          this.updatePagination(pagination, data.data);

          ret(data.data.results);
        } else {
          ret([]);
        } 

      }, (err) => {
        ret(false);

      })
    })
  }

  public getComicsByCharacter(character: any){
    return new Promise((ret) => {
      this.service.getDados('https://gateway.marvel.com/v1/public/characters/'+ character.id + '/comics', '').then((data: any) => {
        if(data && data.data && data.data.results){
          ret(data.data.results);
        } else {
          ret([]);
        } 

      }, (err) => {
        ret(false);

      })
    })
  }

  public getCharacterById(id: number){
    return new Promise((ret) => {
      this.service.getDados('https://gateway.marvel.com/v1/public/characters/' + id, '').then((data: any) => {
        if(data && data.data && data.data.results){
          ret(data.data.results);
          
        } else {
          ret([]);
        } 

      }, (err) => {
        ret(false);

      })
    })
  }

  private updatePagination(pagination: Pagination, data: any){
    pagination.setTotal(data.total);
    pagination.setLimit(data.limit);
    pagination.createPages();
  }
}
