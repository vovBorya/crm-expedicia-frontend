import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { Field } from "react-final-form";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const RangeSlider = ({ title, min, max, input: { onChange } }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState([min, max]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChange({ target: { value: newValue.join(",") } });
  };

  const [from, to] = value;

  return (
    <div className={classes.root}>
      <Typography id="range-slider">{`${title} (${from}-${to})`}</Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={min}
        max={max}
      />
    </div>
  );
};

const RangeNumberInput = ({ source: name, ...props }) => (
  <Field {...props} name={name} component={RangeSlider} type="text" />
);

export default RangeNumberInput;
