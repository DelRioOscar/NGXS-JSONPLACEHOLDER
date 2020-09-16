import { Component, OnInit } from '@angular/core';
import { User } from '@interfaces/user.interface';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FetchAllUsers } from './state/users.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Select(state => state.users.users) users$: Observable<User[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(FetchAllUsers);
  }
}
