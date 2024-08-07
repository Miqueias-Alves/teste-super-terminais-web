/* eslint-disable @typescript-eslint/no-explicit-any */
import { KeyboardArrowDown } from '@mui/icons-material'
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
} from '@mui/material'
import SelectMui, { SelectProps } from '@mui/material/Select'
import { useId } from 'react'
import { Controller } from 'react-hook-form'

type Props = SelectProps & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: any
  options?: Array<{
    id: string | number
    name: string | number
    [x: string]: string | number | object | boolean
  }>
  name: string
  helperText?: string
  defaultValue?: { id: string | number; name: string | number } | string
  minWidth?: number
}

export function Select({
  control,
  name,
  options,
  helperText,
  defaultValue = '',
  minWidth,
  ...rest
}: Props) {
  const selectId = useId()

  return (
    <>
      {control ? (
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ field }) => (
            <FormControl
              sx={{ m: 0, minWidth: minWidth ?? 120, width: '100%' }}
              error={rest?.error}
            >
              <InputLabel htmlFor={selectId}>{rest?.label}</InputLabel>
              <SelectMui
                id={selectId}
                fullWidth
                {...field}
                {...rest}
                IconComponent={KeyboardArrowDown}
                sx={{
                  ...rest?.sx,
                  '&.MuiInputBase-root.Mui-disabled': {
                    color: 'inherit !important',
                  },
                  '& .MuiSelect-select.MuiInputBase-input.Mui-disabled': {
                    color: 'inherit !important',
                    WebkitTextFillColor: 'inherit',
                    background: 'transparent',
                  },
                }}
              >
                {options?.map((item, index) => (
                  <MenuItem key={index} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </SelectMui>
              {(rest?.error || helperText) && (
                <FormHelperText>
                  {helperText}
                </FormHelperText>
              )}
            </FormControl>
          )}
        />
      ) : (
        <FormControl
          sx={{ m: 0, minWidth: minWidth ?? 120, width: '100%' }}
          error={rest?.error}
        >
          <InputLabel htmlFor={selectId}>{rest?.label}</InputLabel>
          <SelectMui
            id={selectId}
            name={name}
            defaultValue={defaultValue}
            fullWidth
            {...rest}
            IconComponent={KeyboardArrowDown}
            sx={{
              ...rest?.sx,
              '&.MuiInputBase-root.Mui-disabled': {
                color: 'inherit !important',
              },
              '& .MuiSelect-select .MuiInputBase-input.Mui-disabled': {
                color: 'red !important',
                WebkitTextFillColor: 'inherit',
                background: 'transparent',
              },
            }}
          >
            {options?.map((item, index) => (
              <MenuItem key={index} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </SelectMui>
          {(rest?.error || helperText) && (
            <FormHelperText>
              {
                helperText
              }
            </FormHelperText>
          )}
        </FormControl>
      )}
    </>
  )
}
