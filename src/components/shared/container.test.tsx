import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Container } from "./container";

describe("Container", () => {
  it("renders children", () => {
    render(<Container>Foundation content</Container>);

    expect(screen.getByText("Foundation content")).toBeInTheDocument();
  });
});
