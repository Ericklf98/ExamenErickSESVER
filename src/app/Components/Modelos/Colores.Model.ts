export class Colores{
  constructor(
    private hex_value_?: number,
    private colour_name_?: string,
  ) {}
  public get hex_value(): number {
    return this.hex_value_!;
  }
  public set hex_value(value: number) {
    this.hex_value_ = value;
  }
  public get colour_name(): string {
    return this.colour_name_!;
  }
  public set colour_name(value: string) {
    this.colour_name_ = value;
  }
}
