export class AlbumsAction {
  static readonly type = '[Albums] Add item';
  constructor(public payload: string) { }
}

export class FetchAllAlbums {
  static readonly type = '[Albums] Fetch All Albums';
  constructor(public start: number, public limit: number) { }
}

export class FetchAllAlbumsPerPagination {
  static readonly type = '[Albums] Fetch All Albums Per Pagination';
  constructor(public start: number, public limit: number) { }
}
