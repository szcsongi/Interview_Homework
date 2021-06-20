import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:8080/api/interview/magic";
  constructor(private httpClient: HttpClient) { }

  public sendGetRequestToRestApi(input: String){
    return this.httpClient.get(this.REST_API_SERVER+"?input="+input);
  }

}