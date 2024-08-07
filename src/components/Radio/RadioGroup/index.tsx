import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  SxProps,
} from '@mui/material'
import MuiRadio from '@mui/material/Radio'
import { Controller } from 'react-hook-form'

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: any
  name: string
  label?: string
  options: Array<{
    id: string | number
    name: string | number
    [x: string]: string | number | object
  }>
  row?: boolean
  error?: boolean
  helperText?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: string | number
  sx?: SxProps
}

export function RadioGroup({
  control,
  name,
  label,
  options,
  row = false,
  error,
  helperText,
  onChange,
  value,
  sx,
}: Props) {
  return (
    <FormControl component='fieldset' error={error}>
      {label && <FormLabel component='legend'>{label}</FormLabel>}
      <FormGroup row={row}>
        {control ? (
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <MuiRadioGroup {...field} row={row} sx={sx}>
                {options.map((option, index) => (
                  <FormControlLabel
                    // {...field}
                    key={index}
                    value={option.id}
                    control={<MuiRadio />}
                    label={option.name}
                    // name={name}
                    // onChange={(event)}
                    // inputRef={field.ref}
                  />
                ))}
              </MuiRadioGroup>
            )}
          />
        ) : (
          <MuiRadioGroup value={value} onChange={onChange} row={row} sx={sx}>
            {options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option.id}
                control={<MuiRadio />}
                label={option.name}
              />
            ))}
          </MuiRadioGroup>
        )}
      </FormGroup>
      {(error || helperText) && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}
