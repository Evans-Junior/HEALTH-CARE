import React from "react";
import "./Feel.css"
import axios from "axios";

export default function Feel() {    
  
  

const options = {
  method: 'GET',
  url: 'https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations',
  params: {language: 'en-gb'},
  headers: {
    'x-rapidapi-key': '73181f075msh8a694061ea61c5cp1ee192jsn6778326f034b',
    'x-rapidapi-host': 'priaid-symptom-checker-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

    return(
        <div className="feel">
        <div className="container">
        <form>
        <label><h4>How do you feel</h4></label>
        <div class="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
       </div>
        </form>
        </div>
        </div>
    )
}