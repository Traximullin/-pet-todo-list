import { type ReactNode } from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import List from "."

type dataElement = string

describe("List component", () => {
    const data: dataElement[] = ["item 1", "item 2", "item 3"]
    const renderItem = (item: dataElement): ReactNode => <div key={item}>{item}</div>

    it("should render the list with data", () => {
        const { getByText, } = render(<List data={data} renderItem={renderItem} />)
        data.forEach(item => {
            expect(getByText(item)).toBeInTheDocument()
        })
    })
    it("should render the list without data", () => {
        const { getByText, } = render(<List data={[]} renderItem={renderItem} />)
        expect(getByText("Нет данных")).toBeInTheDocument()
    })
    it("should pass any extra props to the container element", () => {
        const { container, } = render(
            <List
                data={data}
                renderItem={renderItem}
                className="my-list"
            />)
        expect(container.querySelector(".list.my-list")).toBeInTheDocument()
    })
})
