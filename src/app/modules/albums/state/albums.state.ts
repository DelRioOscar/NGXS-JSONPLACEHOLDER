import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AlbumsService } from '@services/albums.service';
import { AlbumsAction, FetchAllAlbums, FetchAllAlbumsPerPagination } from './albums.actions';
import { Album } from '@interfaces/album.interface';

export class AlbumsStateModel {
  public albums: Album[];
}

const defaults = {
  albums: []
};

@State<AlbumsStateModel>({
  name: 'albums',
  defaults
})
@Injectable()
export class AlbumsState {

  constructor(private albumsService: AlbumsService) { }

  @Action(AlbumsAction)
  add({ getState, setState }: StateContext<AlbumsStateModel>, { payload }: AlbumsAction): void {
    const state = getState();
    setState({ albums: [...state.albums] });
  }

  @Action(FetchAllAlbums)
  fetchAll({ getState, setState }: StateContext<AlbumsStateModel>, { start, limit }: FetchAllAlbums): Observable<Album[]> {
    return this.albumsService.getAlbums(start, limit).pipe(
      tap(result => {
        const state = getState();
        setState({
          ...state,
          albums: [...result]
        });
      })
    );
  }

  @Action(FetchAllAlbumsPerPagination)
  fetchAlbumsPerPagination(ctx: StateContext<AlbumsStateModel>, { start, limit }: FetchAllAlbumsPerPagination): Observable<Album[]> {
    return this.albumsService.getAlbums(start, limit).pipe(
      tap(result => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          albums: [...state.albums, ...result]
        });
      })
    );
  }
}

