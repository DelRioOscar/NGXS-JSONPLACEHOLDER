import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { interceptorProviders } from '@configs/interceptors.config';

import { AlbumsService } from './albums.service';

describe('AlbumsService', () => {
  let service: AlbumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [interceptorProviders]
    });
    service = TestBed.inject(AlbumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a array with 10 elements', async () => {
    const albumes = await service.getAlbums(0, 10).toPromise();
    expect(albumes.length).toEqual(10);
  });
});
