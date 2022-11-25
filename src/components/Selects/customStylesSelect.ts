export const customStyles = {
  placeholder: (provided, state) => ({
    ...provided,
    paddingTop: 8,
    paddingBottom: 8,
    color: '#cbacc2',
  }),
  input: (provided, state) => ({
    ...provided,
    paddingTop: 8,
    paddingBottom: 8,
  }),

  control: (provided: Record<string, unknown>, state: any) => ({
    ...provided,
    border: state.isFocused ? '2px solid #672557' : '2px solid #bdbdbd',
    '&:hover': {
      border: '2px solid #672557',
    },
    height: '55px',
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    const color = '#672557';

    return { ...provided, opacity, transition, color };
  },
};

export const theme = (theme) => ({
  ...theme,
  borderRadius: 7,
  colors: {
    ...theme.colors,
    primary25: '#cbacc2',
    primary: '#672557',
  },
});
