import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
  Textarea,
  TextareaProps,
} from '@chakra-ui/react'
import React from 'react'

type TextFieldUniqueProps = {
  label: string
  isValueValid: boolean
  isMultiline?: boolean
}

export type TextFieldProps = TextFieldUniqueProps['isMultiline'] extends true
  ? TextFieldUniqueProps & Partial<TextareaProps>
  : TextFieldUniqueProps & Partial<InputProps>

const TextField: React.FC<TextFieldProps> = ({
  label,
  isMultiline,
  isValueValid,
  ...props
}) => {
  return (
    <FormControl mb="3" isRequired isInvalid={!isValueValid}>
      <FormLabel htmlFor={props.id ?? ''}>{label}</FormLabel>
      {isMultiline ? (
        <Textarea
          {
            /* Type is not inferred properly here */
            ...(props as TextFieldUniqueProps & Partial<TextareaProps>)
          }
        />
      ) : (
        <Input {...props} />
      )}
      {isValueValid ? (
        <FormHelperText>&nbsp;</FormHelperText>
      ) : (
        <FormErrorMessage>{label} is required.</FormErrorMessage>
      )}
    </FormControl>
  )
}

export default TextField
