/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextFieldProps } from '@mui/material'
import { Controller } from 'react-hook-form'

import { InputMui } from './InputMui'

type Props = TextFieldProps & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: any
  name: string
  showIcon?: boolean
  helpWithIcon?: string
}

export function Input({ control, ...rest }: Props) {
  return (
    <>
      {control ? (
        <Controller
          name={rest?.name}
          control={control}
          defaultValue=''
          render={({ field }) => <InputMui {...rest} {...field} />}
        />
      ) : (
        <InputMui {...rest} />
      )}
    </>
  )
}
