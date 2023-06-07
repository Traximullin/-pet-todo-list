/* eslint-disable @typescript-eslint/explicit-function-return-type */
import "./index.scss"
import { type IList } from "./interface"

function List <T> (props: IList<T>) {
    const { data, renderItem, className, ...othersProps } = props

    const currentClasses = ["list"]

    if (className) currentClasses.push(className)

    return (
        <section className={currentClasses.join(" ")} {...othersProps}>
            {
                data.length
                    ? data.map(item => renderItem(item))
                    : <p className="list__no-data">Нет данных</p>
            }
        </section>
    )
}

export default List
