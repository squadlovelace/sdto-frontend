import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const CssTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    fontSize: 18,
    fontFamily: ['Lato', 'Roboto'],
    color: '#672557',
    lineHeight: 25,
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#dbdbdb',
      borderRadius: 7,
      border: '2px solid #dbdbdb',
      position: 'absolute',
    },
    '&:hover fieldset': {
      borderColor: '#dbdbdb',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#672557',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  helperText: {
    position: 'absolute',
    bottom: '-20px',
  },
}));

const InputItem = ({ htmlFor, placeholder, textLabel, errors, control }) => {
  const classes = useStyles();
  return (
    <div className="flex flex-col gap-[10px] mb-8">
      <Controller
        control={control}
        name={htmlFor}
        defaultValue=""
        render={({ field }) => (
          <>
            <label htmlFor={htmlFor}>
              <span className="font-text font-normal text-x4 leading-[25px] text-roxo800">
                {textLabel}
              </span>
            </label>
            <CssTextField
              placeholder={placeholder}
              id={htmlFor}
              className="font-text font-normal text-x4 leading-[25px]  text-roxo500"
              {...field}
              fullWidth
              error={!!errors[htmlFor]}
              helperText={errors[htmlFor] ? errors[htmlFor].message : ''}
              FormHelperTextProps={{
                className: classes.helperText,
              }}
            />
          </>
        )}
      />
    </div>
  );
};

export default InputItem;
