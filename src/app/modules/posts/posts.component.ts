import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Actions, ofActionDispatched, ofActionSuccessful, Select, Store } from '@ngxs/store';
import { AddPost, FetchPostPerPagination } from './state/posts.actions';
import { PostsStateModel } from './state/posts.state';
import { PostModel } from '../../shared/models/post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @ViewChild('inputCommentary', {static: true}) inputElement: ElementRef;
  @Select(state => state.posts.items) posts$: Observable<PostsStateModel[]>;

  form: FormGroup;

  constructor(private store: Store, private renderer: Renderer2, private actions$: Actions) {
    this.form = new FormGroup({
      commentary: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.store.dispatch(new FetchPostPerPagination(1, 10));
    this.renderer.selectRootElement(this.inputElement.nativeElement).focus();
    this.actions$.pipe(
      ofActionSuccessful(AddPost)
    ).subscribe(() => {
      this.form.reset();
      this.form.enable();
      this.renderer.selectRootElement(this.inputElement.nativeElement).focus();
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const post = new PostModel();
      post.body = this.form.get('commentary').value;
      post.userId = 999;
      post.title = 'Cualquier Titulo';
      this.form.disable();
      this.store.dispatch(new AddPost(post));
    }
  }

}
