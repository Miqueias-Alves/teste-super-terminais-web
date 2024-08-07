import { Box } from '@mui/material'
import { forwardRef } from 'react'

import { Icon } from '..'

export const HelpIcon = forwardRef((props, ref) => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      ref={ref}
      sx={{ cursor: 'help', opacity: 0.5 }}
      {...props}
    >
      <Icon name='help' />
    </Box>
  )
})

HelpIcon.displayName = 'HelpIcon'
