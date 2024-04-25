import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cafe} from "../model";

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getCafes():Observable<Cafe[]>{
    return this.http.get<Cafe[]>(this.API_URL);
  }
}
