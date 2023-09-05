import { useState } from "react";
import PropTypes from 'prop-types';
import {toast} from 'react-toastify';
import { SearchInput, Button } from "./Form.styled";


const Form = ({onSubmit}) => {

    const [queryValue, setQueryValue] = useState('');

    const handleChange = event => {
        setQueryValue(event.currentTarget.value.toLowerCase())
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (queryValue.trim() === '') {
            return toast.warning('Oops, no value...');
          }
        onSubmit(queryValue);
        setQueryValue('');
    }


return(
        <form onSubmit={handleSubmit}>
            <SearchInput 
              type="text" 
              name="search"
              autoComplete="off" 
              autoFocus
              placeholder="Enter movie name..." 
              value={queryValue}
              onChange={handleChange} />
            <Button type="submit">Search</Button>
        </form>
);
}

export default Form

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired}