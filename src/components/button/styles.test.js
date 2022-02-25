import styles from "./styles";
import colors from "../../utils/styles/colors";
import {
  LatoBlackFont,
  LatoRegularFont,
} from "../../utils/styles/fonts";

describe("Button styles test", () => {
  it("should have green background when it's disabled", () => {
    expect(styles.container(true).backgroundColor).toBe(colors.BLUE_LIGHT_80);
  });
  it("should have green background when it's not disabled", () => {
    expect(styles.container(false).backgroundColor).toBe(colors.BLUE_0);
  });
  it("should have grey text color when it's disabled", () => {
    expect(styles.title(true, true).color).toBe(colors.GRAY_40);
  });
  it("should have white text color when it's not disabled", () => {
    expect(styles.title(true, false).color).toBe(colors.WHITE);
  });
  it("should have font bold when titleBold param is true", () => {
    expect(styles.title(true).fontFamily).toBe(LatoBlackFont);
  });
  it("should have font regular when titleBold param is false", () => {
    expect(styles.title(false).fontFamily).toBe(LatoRegularFont);
  });
});
