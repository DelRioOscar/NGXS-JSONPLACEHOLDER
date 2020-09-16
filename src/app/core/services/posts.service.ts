import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

import { Post } from '@interfaces/post.interface';
import { UsersService } from './users.service';
import { map } from 'rxjs/operators';

import { PostModel } from '@models/post.model';
import { PostWithUserModel } from '@models/post-with-user.interface';
import { User } from '@interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient, private usersService: UsersService) { }

  getPosts(start: number, limit: number): Observable<Post[]> {
    const params = new HttpParams({
      fromObject: {
        _start: start.toString(),
        _limit: limit.toString(),
      }
    });

    return this.http.get<Post[]>('/posts', { params });
  }

  getPostWithUsers(start: number, limit: number): Observable<PostWithUserModel[]> {
    return forkJoin([this.usersService.getUsers(), this.getPosts(start, limit)]).pipe(
      map(results => {
        const postsWithUsers: PostWithUserModel[] = [];
        const [users, posts] = results;
        for (const post of posts) {
          const postWithUser = new PostWithUserModel();
          postWithUser.id = post.id;
          postWithUser.body = post.body;
          postWithUser.title = post.title;
          postWithUser.userId = post.userId;
          postWithUser.user = users.find(u => u.id === post.userId);
          postsWithUsers.push(postWithUser);
        }
        return postsWithUsers;
      })
    );
  }

  createPost(post: PostModel): Observable<PostWithUserModel> {
    return this.http.post<Post>('/posts', post).pipe(
      map(result => {
        const postWithUser = new PostWithUserModel();
        postWithUser.body = result.body;
        postWithUser.id = result.id;
        postWithUser.title = result.title;
        postWithUser.userId = result.userId;
        postWithUser.user = {
          name: 'Tú',
          address: null,
          username: 'Tú',
          company: null,
          id: result.id,
          email: null,
          phone: null,
          website: null
        };
        return postWithUser;
      })
    );
  }
}
