import {
    ButtonProps,
    CircularProgress,
    Button as MuiButton,
    Tooltip,
} from '@mui/material'
import { ReactNode } from 'react'

import { Icon, IconNamesProps } from '../../Icon'

export type IconButtonProps = Omit<ButtonProps, 'title'> & {
    title?: string
    icon?: ReactNode
    iconName?: IconNamesProps
    loading?: boolean
}

export function IconButton({
    title,
    icon,
    iconName,
    loading,
    size,
    sx,
    ...rest
}: IconButtonProps) {
    const component = (
        <MuiButton
            size={size}
            aria-label={title || rest?.['aria-label'] || iconName}
            disabled={loading || rest?.disabled}
            sx={{
                minWidth: size === 'small' ? 28 : 44,
                minHeight: size === 'small' ? 28 : 44,
                padding: '2px',
                ...sx,
            }}
            {...rest}
        >
            {!loading && (
                <>
                    {icon}
                    {iconName && <Icon name={iconName} />}
                </>
            )}
            {loading && <CircularProgress size={24} />}
        </MuiButton>
    )

    return title && !rest?.disabled && !loading ? (
        <Tooltip title={title} placement='top' arrow>
            {component}
        </Tooltip>
    ) : (
        component
    )
}
