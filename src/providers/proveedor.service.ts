import { Injectable } from '@angular/core';

//Importación del HttpClient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private URL: string = 'https://steamgames-dawm-default-rtdb.firebaseio.com/collection.json';
  constructor(private http:HttpClient) { }
  //Método con la petición HTTP
  getResponse() {
    return this.http.get(this.URL);
}

}
