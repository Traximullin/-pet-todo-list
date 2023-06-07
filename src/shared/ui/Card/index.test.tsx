import { type ReactNode } from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import Card from "."

describe("Card component", () => {

    it("should pass props classname", () => {
        const { container, } = render(<Card className="custom-classname"/>)

        expect(container.querySelector(".card.custom-classname")).toBeInTheDocument()
    })
})
