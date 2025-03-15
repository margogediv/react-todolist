type Props = {
    title: string
}

export const TodolistTitle = ({title}: Props) => {
    return (
        <h3>{title}</h3>
    )
}