import { type ReactNode, type HTMLAttributes } from "react"

export interface IList<T> extends HTMLAttributes<HTMLElement> {
    data: T[]
    renderItem: (item: T) => ReactNode
}
