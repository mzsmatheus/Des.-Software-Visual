import { Livro } from '../models/livro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class LivroService {

    private baseURL = "http://localhost:5000/api/livro"

    constructor(private http: HttpClient) { }

    create(livro: Livro): Observable<Livro>{
        return this.http.post<Livro>(`${this.baseURL}/create`, livro);
    }

    list() : Observable<Livro[]>{
        return this.http.get<Livro[]>(`${this.baseURL}/list`);
    }

}