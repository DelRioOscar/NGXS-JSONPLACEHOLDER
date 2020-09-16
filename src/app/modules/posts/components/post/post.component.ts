import { Component, Input, OnInit } from '@angular/core';
import { PostWithUserModel } from '../../../../shared/models/post-with-user.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  post: PostWithUserModel;

  constructor() { }

  ngOnInit(): void {
  }

}
