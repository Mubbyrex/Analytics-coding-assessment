import { render, screen } from "@testing-library/react";
import NavBar from "../Components/Navbar/NavBar";
import Team from "../Components/Team/Team";
import { Document } from "../generated";
import { MockedProvider } from "@apollo/client/testing";
import MainContent from "../Components/MainContent/MainContent";
import Heading from "../Components/Heading/Heading";
import ASA from "../Components/ASA/ASA";

const mocks: any = [];

describe("Home", () => {
  it("renders the navbar  component", () => {
    const { container } = render(<NavBar />);
  });

  it("renders heading", async () => {
    render(<Heading />);
  });
  it("renders Team component", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Team />
      </MockedProvider>
    );
  });
});
