import { TextField } from '@material-ui/core';

export const TextFieldAdapter = ({ input, meta, ...rest }) => (
    <TextField
      {...input}
      {...rest}
      onChange={(event, value) => input.onChange(value || event.target.value)}
      helperText={meta.touched ? meta.error : ''}      
      error={Boolean(meta.touched && meta.error)}
    />
  )