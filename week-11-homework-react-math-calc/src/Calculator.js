import React from 'react';




class Calculator extends React.Component {
    constructor(props) {
        super();
        this.state = {
          value1: 0,
          value2: 0,
          operator: ["+","-","*"],
         
          result: ''

        };

        //"this" only exists for event handlers if we include lines like this for each
        // event handler
        //this.onValue1Change.bind(this)
        this.calculate = this.calculate.bind(this)
      }
       
      /**
       event target is the element that had the event 
       -in this case the value1 input had a "change" event
    
       */
      onValue1Change = (event) => {
        const newValue = event.target.value;
        this.setState({
          value1: newValue
        })
        debugger
      }
      
      onValue2Change = (event) => {
        const newValue = event.target.value;
        this.setState({
          value2: newValue
        })
      }

      onOperatorChange = (event) =>{
        const newValue = event.target.value;
        this.setState({
          operator: newValue
        })
      }
      //
      calculate = () => {
        let result = 0;
        const {value1, value2, operator} =this.state;
        
        switch(operator) {
          case '+':
            result = parseInt(value1) + parseInt(value2);
            break;
          case '-':
            result = parseInt(value1) - parseInt(value2);
            break;
          case '*':
            result = parseInt(value1) * parseInt(value2);
            break;
          case '/':
            result = parseInt(value1) / parseInt(value2);
            break;
          default:
            result = 0;
        }
        this.setState({
          result
        })
      }
      render() {
        
      
    
        return (
          <div>
             {/* value1 */}
                <input type= "number" onChange={this.onValue1Change} />

                <select onChange={this.onOperatorChange}>
                  <option>+</option>
                  <option>-</option>
                  <option>*</option>
                  <option>/</option>
                </select>

                {/* value2*/}
                <input type="number" onChange={this.onValue2Change}/>

                <button onClick={this.calculate}> =</button>

                <input value={this.state.result} type= "text" disabled/>

          </div>
        
        );
       
       }

        
      
    
}





export default Calculator;