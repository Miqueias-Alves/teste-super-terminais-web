import { Box, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Container } from '../components/Container'
import { Header } from '../components/Header'

export default function DafaultLayout() {
    return (
        <>
            <Header />
            <Box component='main'>
                <Container>
                    <Stack spacing={3} paddingBottom={3}>
                        <Outlet />
                    </Stack>
                </Container>
            </Box>
        </>
    )
}
