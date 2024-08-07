import { CircularProgress, DialogActions, SxProps } from '@mui/material'

import { Button } from '../../Button'

interface Props {
  children?: React.ReactNode
  onCancel?: () => void
  onSave?: () => void
  isView?: boolean
  isSubmit?: boolean
  isLoading?: boolean
  disabledSubmit?: boolean
  sx?: SxProps
}

export function ModalAction({
  children,
  onCancel,
  onSave,
  isSubmit = true,
  isView = false,
  isLoading,
  disabledSubmit,
  sx,
}: Props) {
  return (
    <>
      {(onCancel || onSave) && !isView && (
        <DialogActions
          sx={{
            '&>:not(:first-of-type)': { marginLeft: 2 },
            justifyContent: ['space-between', 'flex-end'],
            ...sx,
          }}
        >
          {onCancel && (
            <Button
              variant='outlined'
              onClick={onCancel}
              sx={{
                background: 'transparent',
                borderColor: (theme) => theme.palette.primary.main,
              }}
              disabled={isLoading}
            >
              {'Cancelar'}
            </Button>
          )}

          {(onSave || isSubmit) && (
            <Button
              variant='contained'
              onClick={onSave}
              type={isSubmit ? 'submit' : 'button'}
              disabled={isLoading || disabledSubmit}
            >
              {isLoading ? (
                <CircularProgress size={24} />
              ) : (
                <>Salvar</>
              )}
            </Button>
          )}

          {children}
        </DialogActions>
      )}
    </>
  )
}
