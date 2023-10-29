import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";
import EventCard from "../../components/EventCard";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      setTimeout(async ()=>{
        await screen.findByText("Message envoyé !");
      },3000)
      
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    render(<Home />);
    render(<EventCard />);
    const events = screen.getByTestId("events-testid");
    expect(events).toBeInTheDocument();
    
  })
  it("a list a people is displayed", () => {
    render(<Home />)
    const people = screen.getByTestId('people-testid')
    expect(people).toBeInTheDocument();
  })
  it("a footer is displayed", () => {
    render(<Home />)
    const footer = screen.getByTestId('footer-testid')
    expect(footer).toBeInTheDocument();
    
  })
  it("an event card, with the last event, is displayed", () => {
    render (<Home />)
    render (<EventCard />)
    const lastCard = screen.getByTestId('lastcard-testid')
    expect(lastCard).toBeInTheDocument();
  })
});
