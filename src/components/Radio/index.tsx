import { Box } from '@mui/material'
import MuiRadio, { RadioProps } from '@mui/material/Radio'
import { Controller } from 'react-hook-form'

type Props = RadioProps & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: any
  name?: string
}

export function Radio({ control, name, ...rest }: Props) {
  return (
    <Box>
      {control && name ? (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <MuiRadio checked={field.value} {...rest} {...field} />
          )}
        />
      ) : (
        <MuiRadio {...rest} />
      )}
    </Box>
  )
}
