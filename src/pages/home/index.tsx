import { type FC } from "react"
import { BaseLayout } from "shared/layout"
import { TodoCard, TodoCreate } from "entities/todo/ui"
import { Input, List } from "shared/ui"

interface ITodo {
    id: number
    title: string
}

const data: ITodo[] = [
    {
        id: 1,
        title: "number",
    },
    {
        id: 1,
        title: "number",
    },
    {
        id: 1,
        title: "number",
    }
]

const HomePage: FC = () => {
    return (
        <BaseLayout>
            <Input placeholder="Новая задача" />
            <List
                data={data}
                renderItem={(data) => (
                    <TodoCard>{data.title}</TodoCard>
                )}
            />
            <TodoCreate />
        </BaseLayout>
    )
}

export default HomePage
