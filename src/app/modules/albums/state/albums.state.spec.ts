import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { AlbumsState } from './albums.state';
import { HttpClientModule } from '@angular/common/http';

describe('Albums actions', () => {

  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      NgxsModule.forRoot([AlbumsState]),
      HttpClientModule]
    })
      .compileComponents();
    store = TestBed.inject(Store);
  });
/* 
  it('should get per pagination albums', async () => {
    await store.dispatch(new FetchAllAlbums(1, 20)).toPromise();
    const albums = store.selectSnapshot(state => state.albums.albums);
    expect(albums.length).toBeGreaterThan(0);
  }); */
});
