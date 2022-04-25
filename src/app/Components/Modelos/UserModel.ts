export class UserModel {
  constructor(private _nombre?: string, private _contraseña?: string) {}

  public get nombre(): string {
    return this._nombre!;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }
  public get UserPassword(): string {
    return this._contraseña!;
  }
  public set UserPassword(value: string) {
    this._contraseña = value;
  }
}
