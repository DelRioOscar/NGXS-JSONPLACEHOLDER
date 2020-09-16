import { Injectable } from '@angular/core';
import { User } from '@interfaces/user.interface';
import { State, Action, StateContext } from '@ngxs/store';
import { UsersService } from '@services/users.service';
import { FetchAllUsers } from './users.actions';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class UsersStateModel {
  public users: User[];
}

const defaults = {
  users: []
};

@State<UsersStateModel>({
  name: 'users',
  defaults
})

@Injectable()
export class UsersState {

  constructor(private usersService: UsersService) { }

  @Action(FetchAllUsers)
  fetchAllUsers({ getState, setState }: StateContext<UsersStateModel>): Observable<User[]> {

    return this.usersService.getUsers().pipe(
      tap(response => {
        const state = getState();
        setState({
          ...state,
          users: [...response]
        });
      })
    );

  }
}
