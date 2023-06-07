import { type FC } from "react"
import "./index.scss"
import { type ITextarea } from "./interface"

const Textarea: FC<ITextarea> = (props) => {
    const { className, ...othersProps } = props

    const currentClasses = ["textarea"]

    if (className) currentClasses.push(className)

    return (
        <div
            className={currentClasses.join(" ")}
            contentEditable
            {...othersProps}
        />
    )
}

export default Textarea
