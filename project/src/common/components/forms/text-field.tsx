import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import TextFieldMui from '@material-ui/core/TextField';

interface Props extends FieldRenderProps<any, any> {
  'data-testid'?: string;
}

export const TextField: React.FunctionComponent<Props> = props => {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    'data-testid': dataTestId,
    ...rest
  } = props;

  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <TextFieldMui
      {...rest}
      name={name}
      error={showError}
      inputProps={{ ...restInput, 'data-testid': dataTestId }}
      onChange={onChange}
      value={value}
      helperText={showError ? meta.error : ''}
      margin="normal"
    />
  );
};
