import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@/test/test-utils";
import { BallotPlacesLeft } from "./ballot-places-left";

vi.mock("@/i18n/client", () => ({
  Trans: ({
    i18nKey,
    values,
  }: {
    i18nKey: string;
    values?: { count: number };
  }) => (
    <span data-testid="message" data-key={i18nKey}>
      {values?.count}
    </span>
  ),
}));

describe("BallotPlacesLeft", () => {
  it("shows nothing when the option has no limit to show", () => {
    render(<BallotPlacesLeft placesLeft={null} />);
    expect(screen.queryByTestId("ballot-places-left")).toBeNull();
  });

  it("says an option is full", () => {
    render(<BallotPlacesLeft placesLeft={0} />);
    expect(screen.getByTestId("message")).toHaveAttribute(
      "data-key",
      "ballotOptionFull",
    );
  });

  it("says how many places are left", () => {
    render(<BallotPlacesLeft placesLeft={2} />);
    const message = screen.getByTestId("message");
    expect(message).toHaveAttribute("data-key", "ballotPlacesLeft");
    expect(message).toHaveTextContent("2");
  });
});
