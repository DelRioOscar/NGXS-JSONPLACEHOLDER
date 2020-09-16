import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Album } from '@interfaces/album.interface';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  getAlbums(start: number, limit: number): Observable<Album[]> {
    const params = new HttpParams({
      fromObject: {
        _start: start.toString(),
        _limit: limit.toString(),
      }
    });
    return this.http.get<Album[]>('/albums', { params });
  }
}
