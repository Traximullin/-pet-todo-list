import { type FC } from "react"
import "./index.scss"
import { Button, Card } from "shared/ui"
import { type ITodoCard } from "./interface"

const TodoCard: FC<ITodoCard> = (props) => {
    const { children, ...othersProps } = props

    return (
        <Card className="todo-card" {...othersProps}>
            <div className="todo-card__content">
                <p className="todo-card__title">{children}</p>
                <p className="todo-card__info">Description: I love London</p>
                <p className="todo-card__info">Author: 12.02.2022</p>
                <p className="todo-card__info">Create: 12.02.2022</p>
            </div>
            <div>
                <Button>Удалить</Button>
            </div>
        </Card>
    )
}

export default TodoCard
