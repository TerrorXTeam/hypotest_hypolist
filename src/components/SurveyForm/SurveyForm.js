import React from 'react';
import Aux from '../../hoc/Aux'
import 'bulma/css/bulma.css';

const SurveyForm = () => (
<Aux>
<div class="field">
  <div class="control">
    <label class="radio">
      <input type="radio" name="question" />
      Yes
    </label>
    <label class="radio">
      <input type="radio" name="question" />
      No
    </label>
  </div>
</div> 
</Aux>
)
export default SurveyForm;