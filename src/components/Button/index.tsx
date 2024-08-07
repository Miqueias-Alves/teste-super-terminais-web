import { Button as MuiButton, ButtonProps, Tooltip } from '@mui/material'

type Props = Omit<ButtonProps, 'title'> & {
    title?: string
}

export function Button({ title, ...rest }: Props) {
    return title && !rest?.disabled ? (
        <Tooltip title={title} placement='top' arrow>
            <MuiButton {...rest} />
        </Tooltip>
    ) : (
        <MuiButton {...rest} />
    )
}