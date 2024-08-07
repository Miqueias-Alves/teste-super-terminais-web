import { ReportOutlined } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'

export function Error({ error }: { error?: Error | string | null }) {
    return (
        <>
            {error && (
                <Stack
                    width={'100%'}
                    justifyContent='center'
                    alignItems={'center'}
                    paddingY={3}
                    spacing={1}
                >
                    <ReportOutlined color='error' fontSize='large' />

                    <Typography color='error'>
                        {typeof error === 'string' ? error : error.message}
                    </Typography>
                </Stack>
            )}
        </>
    )
}
