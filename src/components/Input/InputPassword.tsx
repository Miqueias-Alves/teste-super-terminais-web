import { RemoveRedEye } from '@mui/icons-material'
import { IconButton, InputAdornment, TextFieldProps } from '@mui/material'
import { ForwardedRef, forwardRef, useState } from 'react'

import InputBase from './InputBase'

type Props = TextFieldProps

export const InputPassword = forwardRef(
  ({ ...rest }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
      <>
        <InputBase
          {...rest}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end' sx={{ background: 'transparent' }}>
                <IconButton
                  size='small'
                  sx={{ '&:hover': { background: 'transparent' } }}
                  onClick={() => setShowPassword((show) => !show)}
                >
                  {showPassword ? (
                    <RemoveRedEye fontSize='small' />
                  ) : (
                    <RemoveRedEye fontSize='small' />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          ref={ref}
        />
      </>
    )
  },
)

InputPassword.displayName = 'InputPassword'
