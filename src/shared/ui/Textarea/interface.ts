import { type RefObject, type HTMLAttributes } from "react"

export interface ITextarea extends Omit<HTMLAttributes<HTMLDivElement>, "contentEditable"> {
    forwardRef?: RefObject<HTMLDivElement>
}
