import { type FC } from "react"
import "./index.scss"
import { type IInput } from "./interface"

const Input: FC<IInput> = (props) => {
    const { ...othersProps } = props

    return (
        <input
            className="input"
            {...othersProps}
        />
    )
}

export default Input
