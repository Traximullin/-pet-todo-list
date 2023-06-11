import { forwardRef, type FC, type Ref } from "react"
import "./index.scss"
import { type ITextarea } from "./interface"

const Textarea: FC<ITextarea> = forwardRef((props: ITextarea, ref: Ref<HTMLDivElement>) => {
    const { className, forwardRef, ...othersProps } = props

    const currentClasses = ["textarea"]

    if (className) currentClasses.push(className)

    return (
        <div
            ref={ref || forwardRef}
            className={currentClasses.join(" ")}
            contentEditable
            {...othersProps}
        />
    )
})

Textarea.displayName = "Textarea"

export default Textarea
