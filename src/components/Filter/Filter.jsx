import PropTypes from "prop-types";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Filter = ({ onChangeFilter, filter }) => {

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
      type="text"
        name='filter'
        placeholder="Contact's name"
        value={filter}
        onChange={onChangeFilter}
    >
      <TextField id="outlined-basic" label="Contact's name" variant="outlined" color="success" sx={{backgroundColor: "white", borderRadius: "5px"}} />
    </Box>
  );
  
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

