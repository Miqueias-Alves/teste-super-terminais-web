/* eslint-disable @typescript-eslint/no-explicit-any */
import { CancelOutlined, CheckCircleOutline } from '@mui/icons-material'
import { InputAdornment, TextFieldProps, Tooltip } from '@mui/material'
import { ForwardedRef, forwardRef } from 'react'

import { HelpIcon } from '../Icon/Help'
import InputBase from './InputBase'
import { InputPassword } from './InputPassword'

type Props = TextFieldProps & {
  name?: string
  showIcon?: boolean
  helpWithIcon?: string
  InputProps?: any
}

export const InputMui = forwardRef(
  (
    { showIcon, helpWithIcon, InputProps, ...rest }: Props,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return rest?.type === 'password' ? (
      <InputPassword
        {...rest}
        ref={ref}
        helperText={rest?.helperText}
      />
    ) : (
      <InputBase
        autoComplete='off'
        {...rest}
        helperText={rest?.helperText}
        color={rest?.error ? 'error' : rest?.color}
        InputProps={
          showIcon || helpWithIcon?.length
            ? {
                endAdornment: (
                  <InputAdornment position='end'>
                    {!helpWithIcon?.length && rest?.color === 'success' && (
                      <CheckCircleOutline fontSize='small' color='success' />
                    )}
                    {!helpWithIcon?.length && rest?.error && (
                      <CancelOutlined fontSize='small' color='error' />
                    )}
                    {!!helpWithIcon?.length && (
                      <Tooltip title={helpWithIcon} arrow placement='top'>
                        <HelpIcon />
                      </Tooltip>
                    )}
                  </InputAdornment>
                ),
                inputComponent: InputProps?.inputComponent,
              }
            : InputProps
            ? InputProps
            : undefined
        }
        ref={ref}
      />
    )
  },
)

InputMui.displayName = 'InputMui'
