type Props = {
    title: string
    click?: () => void
}

export const Button = ({ title, click }: Props) => {
    return (
        <button onClick={() => {click}}>{title}</button>
    )
}