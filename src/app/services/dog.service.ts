import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  private apiUrl = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) {}

  fetchDogImage() {
    return this.http.get(this.apiUrl);
  }
}