import { fireEvent, render, screen } from "@testing-library/react";
import LangSwitcher from "./LangSwitcher";

jest.mock("react-i18next", () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: "3rdParty",
    init: jest.fn(),
  },
}));

describe("LangSwitcher tests", () => {
  test("Test render", () => {
    render(<LangSwitcher />);
    expect(screen.getByText("Language")).toBeInTheDocument();
  });
  test("Test click", () => {
    render(<LangSwitcher />);
    const langBtn = screen.getByText("Language");
    fireEvent.click(langBtn);
    expect(screen.getByText("English")).toBeInTheDocument();
    expect(screen.getByText("Русский")).toBeInTheDocument();
  });
});
