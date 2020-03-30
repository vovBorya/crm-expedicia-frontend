import React, { useCallback } from 'react';
import { useInput, FieldTitle } from 'react-admin';
import PropTypes from 'prop-types';
import { DatePicker, TimePicker, DateTimePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { format } from 'date-fns'

const Picker = ({ PickerComponent, ...fieldProps }) => {

  const {
    options,
    label,
    source,
    resource,
    className,
    isRequired,
    providerOptions,
    parse,
    valueFormat
  } = fieldProps;

  const { input, meta } = useInput({ source });

  const { touched, error } = meta;

  const parseValue = useCallback((v) => {
    let parseFunc;
    if (parse) parseFunc = parse;
    if (!parseFunc && valueFormat) parseFunc = (val) => format(val, valueFormat);
    if (!parseFunc) parseFunc = (val => new Date(val).toISOString())
    return parseFunc(v)
  }, [parse, valueFormat])

  const handleChange = useCallback(value => {
    parseValue(value) ? input.onChange(parseValue(value)) : input.onChange(null);
  }, [input, parseValue]);

  const onBlur = () => input.onBlur(input.value ? parseValue(input.value) : null);

  return (
    <div className="picker">
      <MuiPickersUtilsProvider {...providerOptions}>
        <PickerComponent
          {...options}
          label={<FieldTitle
            label={label}
            source={source}
            resource={resource}
            isRequired={isRequired}
          />}
          margin="normal"
          error={!!(touched && error)}
          helperText={touched && error}
          className={className}
          value={input.value ? new Date(input.value) : null}
          onChange={date => handleChange(date)}
          onBlur={ onBlur }
        />
      </MuiPickersUtilsProvider>
    </div>
  )
}

Picker.propTypes = {
  input: PropTypes.object,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  meta: PropTypes.object,
  options: PropTypes.object,
  resource: PropTypes.string,
  source: PropTypes.string,
  labelTime: PropTypes.string,
  className: PropTypes.string,
  providerOptions: PropTypes.shape({
    utils: PropTypes.func,
    locale: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
};

Picker.defaultProps = {
  input: {},
  isRequired: false,
  meta: { touched: false, error: false },
  options: {},
  resource: '',
  source: '',
  labelTime: '',
  className: '',
  providerOptions: {
    utils: DateFnsUtils,
    locale: undefined,
  },
};

export const DateInput = props => <Picker PickerComponent={DatePicker} {...props} />
export const TimeInput = props => <Picker PickerComponent={TimePicker} {...props} />
export const DateTimeInput = props => <Picker PickerComponent={DateTimePicker} {...props} />
