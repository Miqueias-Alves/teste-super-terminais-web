import { SelectChangeEvent, Stack, StackProps } from '@mui/material'
import { Container } from '../Container'
import { DefaultMenu } from '../DefaultMenu'
import { useMenu } from '../../hooks/useMenu'

type Props = StackProps & {
    marginBottom?: number
    paddingLeft?: number
}

export function Header(props: Props) {
    const { menus, activeMenu } = useMenu()

    return (
        <Stack
            component='header'
            direction='row'
            alignItems='center'
            sx={{
                minHeight: 104,
                borderBottom: (theme) => `2px solid ${theme.palette.secondary.light}`,
                marginBottom: props?.marginBottom ?? 3,
                paddingLeft: props?.paddingLeft ?? 0,
            }}
        >
            <Container>
                <Stack
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                    sx={props?.sx}
                >
                    <Stack direction='row' alignItems='center' spacing={2}>
                        <DefaultMenu options={menus} />
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    )
}
