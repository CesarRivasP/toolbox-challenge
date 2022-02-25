import { moderateScale } from "./responsive";

describe("Moderate Scale", () => {
  it("Moderate Scale retun value ", () => {
    const roundedDecimal = Math.round(moderateScale(2, 1));
    expect(roundedDecimal).toBe(4);
  });
});
