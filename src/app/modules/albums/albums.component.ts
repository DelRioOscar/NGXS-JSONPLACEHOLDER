import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FetchAllAlbums, FetchAllAlbumsPerPagination } from './state/albums.actions';
import { Observable } from 'rxjs';
import { Album } from '@interfaces/album.interface';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  @Select(state => state.albums.albums) albums$: Observable<Album[]>;

  scrollDistance = 1;
  scrollUpDistance = 1;

  start = 0;
  readonly limit = 25;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new FetchAllAlbums(this.start, this.limit));
  }

  onScroll(): void {
    this.start += 10;
    this.store.dispatch(new FetchAllAlbumsPerPagination(this.start, this.limit));
  }

}
