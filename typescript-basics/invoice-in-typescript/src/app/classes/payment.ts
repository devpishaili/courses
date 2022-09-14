import { HasFormatter } from "./../interfaces/HasFormatter";
import { compactNumberFormat } from "../utils/formatter";

export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} paid ${compactNumberFormat(this.amount)} for ${
      this.details
    }`;
  }
}
