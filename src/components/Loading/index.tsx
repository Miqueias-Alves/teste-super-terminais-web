import { CircularProgress, LinearProgress, Stack, SxProps } from '@mui/material'

const progress = {
  circular: (
    <CircularProgress aria-label='circularProgress' size={83} thickness={2} />
  ),
  linear: (
    <LinearProgress
      aria-label='linearProgress'
      sx={{ width: 120, borderRadius: 6 }}
    />
  ),
}

interface Props {
  mode?: 'circular' | 'linear'
  sx?: SxProps
}

export function Loading({ mode = 'circular', sx }: Props) {
  return (
    <Stack
      flex={1}
      justifyContent={'center'}
      alignItems={'center'}
      padding={3}
      sx={sx}
    >
      {progress[mode]}
    </Stack>
  )
}
