/* eslint-disable @typescript-eslint/explicit-function-return-type */
import "./index.scss"
import { type IList } from "./interface"

function List <T> (props: IList<T>) {
    const { data, renderItem, ...othersProps } = props

    return (
        <section {...othersProps}>
            {
                data.map(item => renderItem(item))
            }
        </section>
    )
}

export default List
