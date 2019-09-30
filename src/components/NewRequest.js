import React from 'react';
//import PropTypes from 'prop-types';
import Header from './Header';
import Date from './Date';
import Calendar from './Calendar';
import Error from './Error';

const NewRequest = props => {
	return(
		<React.Fragment>
		  
      <Header/>
      <Date/>
      <Calendar/>
      <Error/>
		</React.Fragment>

	);
}

NewRequest.propTypes = {

}


export default NewRequest;