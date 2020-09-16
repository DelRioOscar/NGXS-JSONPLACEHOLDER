import { PostModel } from '@models/post.model';

export class AddPost {
  static readonly type = '[Posts] Add Post';
  constructor(public post: PostModel) { }
}

export class FetchPostPerPagination {
  static readonly type = '[Posts] Add item';
  constructor(public start: number, public limit: number) { }
}
