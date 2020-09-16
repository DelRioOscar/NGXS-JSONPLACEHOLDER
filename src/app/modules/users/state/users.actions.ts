export class UsersAction {
  static readonly type = '[Users] Add item';
  constructor(public payload: string) { }
}

export class FetchAllUsers {
  static readonly type = '[Users] Fetch All Users';
}
