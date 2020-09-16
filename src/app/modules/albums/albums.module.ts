import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { AlbumComponent } from './components/album/album.component';
import { NgxsModule } from '@ngxs/store';

import { AlbumsState } from './state/albums.state';


@NgModule({
  declarations: [AlbumsComponent, AlbumComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    InfiniteScrollModule,
    NgxsModule.forFeature([AlbumsState])
  ]
})
export class AlbumsModule { }
