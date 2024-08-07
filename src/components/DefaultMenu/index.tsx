import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material'
import { useState } from 'react'

import { IconButton } from '../Button/IconButton'
import { Container } from '../Container'
import { Menu } from '../Menu'
import { MenuProps } from '../../configs/menuConfig'

interface Props {
  title?: string
  options: MenuProps[]
}

export function DefaultMenu({ title, options }: Props) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <IconButton
        variant='outlined'
        title={''}
        iconName='menu'
        onClick={handleOpen}
      />

      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          backdropFilter: 'blur(4px)',
          '& .MuiBox-root': {
            backdropFilter: 'none !important',
          },
        }}
      >
        <Fade in={open}>
          <Box
            onClick={handleClose}
            sx={{
              position: 'absolute',
              height: '100%',
              maxHeight: '100vh',
              top: [0, '50%'],
              left: [0, '50%'],
              transform: ['translate(0%, 0%)', 'translate(-50%, -50%)'],
              width: '100%',
              maxWidth: '100vw',
              p: [2, 4],
              overflowY: 'auto',
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
            <Container sx={{ paddingX: [0, 4] }}>
              <IconButton
                variant='outlined'
                title={'Fechar'}
                iconName='close'
                onClick={handleClose}
              />
            </Container>

            <Container sx={{ padding: [0, 4], paddingTop: [2, 4] }}>
              <Typography
                variant='h1'
                marginBottom={[2, 4]}
                sx={{ fontSize: ['1.125rem', '1.5rem'] }}
              >
                {title}
              </Typography>

              <Menu options={options} />
            </Container>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}