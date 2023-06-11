import { useRef, type FC } from "react"
import { Textarea } from "shared/ui"

const TodoCreate: FC = () => {

    const ref = useRef<HTMLDivElement>(null)

    return (
        <Textarea forwardRef={ref} placeholder="Новая задача..." />
    )
}

export default TodoCreate
