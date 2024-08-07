import {
  Box,
  Dialog,
  DialogContent,
  DialogProps,
  Stack,
  Typography,
} from '@mui/material'

import { IconButton } from '../Button/IconButton'
interface Props extends Omit<DialogProps, 'title'> {
  title?: string | null
  fullWidth?: boolean
  hiddenTitle?: boolean
  showIconClose?: boolean
  onClose: (event: object, reason: 'backdropClick' | 'escapeKeyDown') => void
  children: React.ReactNode
  goBack?: () => void
}

export function Modal({
  title,
  fullWidth = true,
  maxWidth = 'sm',
  open,
  onClose,
  showIconClose = false,
  hiddenTitle = false,
  children,
  goBack,
  ...rest
}: Props) {
  return (
    <>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        // onClose={onClose}
        {...rest}
        sx={{
          ...rest?.sx,
        }}
      >
        {!hiddenTitle && (
          <Stack direction='row' component='div' sx={{ m: 0, p: 3, pb: 0 }}>
            <Stack direction='row' alignItems='center' spacing={2}>
              <IconButton
                variant='contained'
                iconName='chevronLeft'
                onClick={() =>
                  goBack ? goBack() : onClose({}, 'escapeKeyDown')
                }
              />
              <Typography
                variant='h1'
                sx={{ fontSize: ['1.125rem', '1.5rem'] }}
              >
                {title}
              </Typography>
            </Stack>

            {showIconClose ? (
              <Box>
                <IconButton
                  aria-label='close'
                  onClick={() => onClose({}, 'escapeKeyDown')}
                  iconName='close'
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    minWidth: 44,
                    minHeight: 44,
                  }}
                />
              </Box>
            ) : null}
          </Stack>
        )}
        <DialogContent
          sx={{
            paddingTop: 3,
            '&::-webkit-scrollbar': {
              width: 6,
              height: 6,
              background: 'transparent',
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              background: (theme) => theme.palette.background.default,
            },
          }}
        >
          {children}
        </DialogContent>
      </Dialog>
    </>
  )
}
