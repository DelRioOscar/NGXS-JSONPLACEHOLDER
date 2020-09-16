import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostComponent } from './components/post/post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsState } from './state/posts.state';


@NgModule({
  declarations: [PostsComponent, PostComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([PostsState])
  ]
})
export class PostsModule { }
