import styles from "./styles";
import { SCREEN_HEIGHT } from "../../utils/constants";
import { verticalScale } from "../../utils/styles/responsive";

describe("Info modal styles test", () => {
  it("should be at the middle of the screen", () => {
    expect(styles.dialog(140).top).toBe(SCREEN_HEIGHT * 0.5 - 140 * 0.5);
  });
  it("should have padding top of 60 when show close button is true", () => {
    expect(styles.dialog(140, true).paddingTop).toBe(verticalScale(60));
  });
});
