import { type FC } from "react"
import "./index.scss"
import { type IBaseLayout } from "./interface"

const BaseLayout: FC<IBaseLayout> = (props) => {

    const { ...othersProps } = props

    return (
        <section className="base-layout" {...othersProps} />
    )
}

export default BaseLayout
