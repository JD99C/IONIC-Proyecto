import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CocheService {
  endpoint = 'http://192.168.0.17:8080/api/coche';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  //Get Coches
  getCoches(){
    return this.httpClient.get(this.endpoint);
  }
  //Post Coche
  createCoche(coche, blob){
    let formData = new FormData();
    formData.append("marca", coche.marca);
    formData.append("modelo", coche.modelo);
    formData.append("precio", coche.precio)
    formData.append("file", blob);

    return this.httpClient.post(this.endpoint, formData);
  }

  updateCoche(id, coche): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(coche), this.httpOptions)
  }

  getCoche(id){
    return this.httpClient.get(this.endpoint + '/' + id)
  }

  //Delete Coche
  deleteCoche(id) {
    return this.httpClient.delete(this.endpoint + '/' + id, this.httpOptions)
  }

}

