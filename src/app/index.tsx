import { type FC } from "react"
import "./index.scss"
import { BaseLayout } from "shared/layout"
import { Input, List } from "shared/ui"
import { TodoCard } from "entities/todo/ui"

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

const App: FC = () => {
    return (
        <BaseLayout>
            <Input placeholder="Новая задача" />
            <List
                data={data}
                renderItem={(data) => (
                    <TodoCard>{data.title}</TodoCard>
                )}
            />
        </BaseLayout>
    )
}

export default App
