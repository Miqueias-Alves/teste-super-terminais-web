import { TextField, TextFieldProps } from '@mui/material'
import { ForwardedRef, forwardRef } from 'react'

type Props = TextFieldProps

function InputBase(props: Props, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <TextField
      {...props}
      ref={ref}
      sx={{
        ...props?.sx,
        '& .MuiInputBase-root.Mui-disabled': {
          color: 'inherit',
          WebkitTextFillColor: 'inherit',
          background: 'transparent',
        },
        '& .MuiInputBase-input.Mui-disabled': {
          color: 'inherit',
          WebkitTextFillColor: 'inherit',
        },
      }}
    />
  )
}

InputBase.displayName = 'InputBase'

export default forwardRef(InputBase)
