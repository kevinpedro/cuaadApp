import { HttpClient }    from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the UbicacionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UbicacionServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UbicacionServiceProvider Provider');
  }
  
    getRemoteData(){
        this.http.get('http://localhost:1337/148.202.102.56/WebApi/v1/?op=getplaces').map(res => res).subscribe(data => {
            console.log(data);
        });
    }


}
