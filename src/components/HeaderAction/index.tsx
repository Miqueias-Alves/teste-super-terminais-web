import { Stack, SxProps } from '@mui/material'
import { ReactNode } from 'react'

import { Button } from '../Button'
import { Icon, IconNamesProps } from '../Icon'

type ButtonType = {
    title?: string | null
    iconName: IconNamesProps
    onClick?: () => void
}

interface Props {
    onCreate?: () => void
    onSearch?: (search: string) => void
    children?: ReactNode
    buttonTitle?: string | null
    sx?: SxProps
    buttons?: ButtonType[]
    module?: string
    permission?: string
}

export function HeaderAction({
    onCreate,
    buttonTitle,
    children,
    sx,
    buttons
}: Props) {

    return (
        <Stack
            width='100%'
            direction={['column-reverse', 'row']}
            alignItems={['flex-start', 'center']}
            sx={sx}
        >
            {onCreate && (
                <Button
                    variant='contained'
                    startIcon={<Icon name='add' />}
                    onClick={onCreate}
                    sx={{
                        textTransform: 'initial',
                        marginTop: [2, 0],
                        marginRight: [0, 2],
                    }}
                >
                    {buttonTitle ?? 'Novo'}
                </Button>
            )}

            {!!buttons?.length && (
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    flexWrap={'wrap'}
                    width={['100%', 'auto']}
                    sx={{
                        marginRight: [0, 2],
                        '& button + button': {
                            marginLeft: 2,
                        },
                    }}
                >
                    {buttons.map((item, index) => (
                        <Button
                            key={index}
                            variant='contained'
                            startIcon={<Icon name={item.iconName} />}
                            onClick={item?.onClick}
                            sx={{
                                textTransform: 'initial',
                                marginTop: [2, 0],
                            }}
                        >
                            {item?.title ?? 'Novo'}
                        </Button>
                    ))}
                </Stack>
            )}

            {children}
        </Stack>
    )
}
