import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import Textarea from "."

describe("Textarea", () => {
    test("renders without errors", () => {
        render(<Textarea />)
    })

    test("renders with custom class", () => {
        const { container, } = render(<Textarea className="custom-textarea" />)
        const textarea = container.querySelector(".textarea.custom-textarea")
        expect(textarea).toBeInTheDocument()
    })

    // test("supports typing", () => {
    //     const { container, } = render(<Textarea />)
    //     const textarea = container.querySelector(".textarea") as Element

    //     fireEvent.input(textarea, { target: { value: "Hello, World!", }, })

    //     expect(textarea.innerHTML).toBe("Hello, World!")
    // })

})
