import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import PokemonCard from "@/components/PokemonCard";
import PokemonType from "@/components/PokemonType";

describe("Test Mock for Bulbasaur,Charmander,Squirtle", () => {
  it("renders PokemonCard", () => {
    render(
      <PokemonCard
        pokemon={{
          id: "UG9rZW1vbjowMDE=",
          number: "001",
          name: "Bulbasaur",
          image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
        }}
      />
    );
    // check if all components are rendered
    expect(screen.getByTestId("pokemoncard")).toBeInTheDocument();
    expect(screen.getByTestId("pokemonName")).toBeInTheDocument();
    expect(screen.getByTestId("number")).toBeInTheDocument();
    expect(screen.getByTestId("image")).toBeInTheDocument();
  });

  it("check name Bulbasaur", () => {
    render(
      <PokemonCard
        pokemon={{
          id: "UG9rZW1vbjowMDE=",
          number: "001",
          name: "Bulbasaur",
          image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
        }}
      />
    );
    const pkName = screen.getByTestId("pokemonName");
    const pknumber = screen.getByTestId("number");
    const pkimage = screen.getByTestId("image");

    expect(pkName.textContent).toEqual("Bulbasaur");
    expect(pknumber.textContent).toEqual("001.");
    expect(pkimage.getAttribute("src")).toEqual(
      "https://img.pokemondb.net/artwork/bulbasaur.jpg"
    );
  });
  it("check name Charmander", () => {
    render(
      <PokemonCard
        pokemon={{
          id: "UG9rZW1vbjowMDQ=",
          number: "004",
          name: "Charmander",
          image: "https://img.pokemondb.net/artwork/charmander.jpg",
        }}
      />
    );
    const pkName = screen.getByTestId("pokemonName");
    const pknumber = screen.getByTestId("number");
    const pkimage = screen.getByTestId("image");

    expect(pkName.textContent).toEqual("Charmander");
    expect(pknumber.textContent).toEqual("004.");
    expect(pkimage.getAttribute("src")).toEqual(
      "https://img.pokemondb.net/artwork/charmander.jpg"
    );
  });
  it("check name Squirtle", () => {
    render(
      <PokemonCard
        pokemon={{
          id: "UG9rZW1vbjowMDE=UG9rZW1vbjowMDc=",
          number: "007",
          name: "Squirtle",
          image: "https://img.pokemondb.net/artwork/squirtle.jpg",
        }}
      />
    );
    const pkName = screen.getByTestId("pokemonName");
    const pknumber = screen.getByTestId("number");
    const pkimage = screen.getByTestId("image");

    expect(pkName.textContent).toEqual("Squirtle");
    expect(pknumber.textContent).toEqual("007.");
    expect(pkimage.getAttribute("src")).toEqual(
      "https://img.pokemondb.net/artwork/squirtle.jpg"
    );
  });
});

describe("Test Type Mock for Bulbasaur,Charmander,Squirtle", () => {
  it("renders PokemonType", () => {
    render(<PokemonType types={["Grass", "Poisons"]} name={"Bulbasaur"} />);
    expect(screen.getByTestId("pokemontype")).toBeInTheDocument();
    
    const pkType = screen.getAllByTestId("types");
    expect(pkType.length).toEqual(2);
    expect(pkType.map(c=>c.textContent)).toEqual(["Grass ", "Poisons "]);

  });
  it("check Bulbasaur types", () => {
    render(<PokemonType types={["Grass", "Poisons"]} name={"Bulbasaur"} />);
    expect(screen.getByTestId("pokemontype")).toBeInTheDocument();
    
    const pkType = screen.getAllByTestId("types");
    expect(pkType.length).toEqual(2);
    expect(pkType.map(c=>c.textContent)).toEqual(["Grass ", "Poisons "]);

  });
  it("check Charmander types", () => {
    render(<PokemonType types={["Fire"]} name={"Charmander"} />);
    expect(screen.getByTestId("pokemontype")).toBeInTheDocument();
    
    const pkType = screen.getAllByTestId("types");
    expect(pkType.length).toEqual(1);
    expect(pkType.map(c=>c.textContent)).toEqual(["Fire "]);

  });
  it("check Squirtle types", () => {
    render(<PokemonType types={["Water"]} name={"Squirtle"} />);
    expect(screen.getByTestId("pokemontype")).toBeInTheDocument();
    
    const pkType = screen.getAllByTestId("types");
    expect(pkType.length).toEqual(1);
    expect(pkType.map(c=>c.textContent)).toEqual(["Water "]);

  });
});
