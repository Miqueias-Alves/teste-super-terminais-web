import { Menu, Stack } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { IconButton } from '../Button/IconButton'
import { IconNamesProps } from '../Icon'

export type ActionType = {
    type: IconNamesProps
    title?: string
    disabled?: boolean
    action?: () => void
    router?: string

    module?: string // modulos que o usuario tem acesso ex: CONF_SENSOR
    permission?: string // permissao que o usuario tem acesso ex: CREATE, EDIT, VIEW, DELETE
}

interface Props {
    icon?: IconNamesProps
    options: ActionType[]
    color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    size?: 'small' | 'medium' | 'large'
    title?: string
}

export function Actions({
    icon = 'moreVert',
    title,
    options = [],
    color,
    size,
}: Props) {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <IconButton
                variant={open ? 'contained' : 'text'}
                color={color}
                size='small'
                iconName={icon}
                title={'açoes'}
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup='true'
                onClick={handleClick}
                sx={{
                    background: 'transparent',
                }}
            />
            <Menu
                id='long-menu'
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        padding: 8,
                    },
                }}
                sx={{
                    '& .MuiPaper-root': {
                        background: (theme) =>
                            theme.palette.mode === 'dark'
                                ? '#141432 !important'
                                : `${theme.palette.background.paper} !important`,
                    },
                    '& ul': {
                        padding: 0,
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Stack direction='row' spacing={1} onClick={handleClose}>
                    {options.map((item, index) => (
                        <>
                            {item?.router && !item?.disabled ? (
                                <Link to={item.router}>
                                    <IconButton
                                        title={
                                            item?.title ?? item.type ?? ''
                                        }
                                        variant='contained'
                                        iconName={item.type}
                                        color={'secondary'}
                                        onClick={item.action}
                                        size={size}
                                    />
                                </Link>
                            ) : (
                                <IconButton
                                    key={index}
                                    title={item?.title ?? item.type ?? ''}
                                    variant='contained'
                                    iconName={item.type}
                                    color={'secondary'}
                                    onClick={item.action}
                                    disabled={item?.disabled}
                                    size={size}
                                />
                            )}
                        </>
                    ))}
                </Stack>
            </Menu>
        </>
    )
}
