import { type FC } from "react"
import "./index.scss"
import { BaseLayout } from "shared/layout"
import { Input } from "shared/ui"
import { TodoCard } from "entities/todo/ui"

const App: FC = () => {
    return (
        <BaseLayout>
            <Input placeholder="Новая задача"/>
            <TodoCard>
                Hello
            </TodoCard>
        </BaseLayout>
    )
}

export default App
