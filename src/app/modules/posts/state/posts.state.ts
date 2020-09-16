import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { PostsService } from '@services/posts.service';
import { FetchPostPerPagination, AddPost } from './posts.actions';
import { tap } from 'rxjs/operators';
import { PostWithUserModel } from 'src/app/shared/models/post-with-user.interface';

export class PostsStateModel {
  public items: PostWithUserModel[];
}

const defaults = {
  items: []
};

@State<PostsStateModel>({
  name: 'posts',
  defaults
})
@Injectable()
export class PostsState {

  constructor(private postsService: PostsService) { }

  @Action(AddPost)
  addPost(ctx: StateContext<PostsStateModel>, { post }: AddPost) {
    return this.postsService.createPost(post).pipe(
      tap(result => {
        const state = ctx.getState();
        const r = [result];
        ctx.setState({
          ...state,
          items: [
            ...r,
            ...state.items
          ]
        });
      })
    );
  }

  @Action(FetchPostPerPagination)
  fetchPostPerPagination(ctx: StateContext<PostsStateModel>, { start, limit }: FetchPostPerPagination) {
    return this.postsService.getPostWithUsers(start, limit).pipe(
      tap(result => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          items: [...result]
        });
      })
    );
  }
}
