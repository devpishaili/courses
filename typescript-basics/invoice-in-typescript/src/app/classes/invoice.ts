import { HasFormatter } from "./../interfaces/HasFormatter";
import { compactNumberFormat } from "../utils/formatter";

export class Invoice implements HasFormatter {
  //   readonly client: string;
  //   private details: string;
  //   public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {
    // this.client = c;
    // this.details = d;
    // this.amount = a;
  }

  format() {
    return `${this.client} owes ${compactNumberFormat(this.amount)} for ${
      this.details
    }`;
  }
}
