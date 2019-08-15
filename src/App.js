import React ,{Component} from 'react';
import './App.css';



class App extends Component {
    
    state={
      userInput:'',
      userOutput:'',
      symbol:',',
      
    }

    changeInputValue= ( event ) => {
        this.setState({
          userInput: event.target.value 
        })
    }

    symbolChangeHandler =(event) =>{
      this.setState({
        symbol:event.target.value
      })
    }

    onClickHandler =( ) =>{
      let str= this.state.userInput; 
      str=str.trim();
      let symbol=',';
               
        if(document.getElementById('exampleRadios1').checked){
            symbol= this.state.symbol;
            
        }
              
        if(document.getElementById('exampleRadios2').checked){
            
            symbol ="'" +this.state.symbol+"'";            
            str = "'"+str+"'";
           
            
        }else if(document.getElementById('exampleRadios3').checked){
            
            symbol ='"' +this.state.symbol+'"';           
            str = '"'+str+'"';
            
        }

         str = str.replace(/\n/g,symbol);
        
        this.setState({
            userOutput:str
        })
        
    }
     clearDefaultText =()=>{
            document.getElementById('exampleFormControlTextarea1').placeholder='';
            document.getElementById('exampleFormControlTextarea2').placeholder='';
     }

  

    
  render(){
    const inputDefaultText='Hello\nComa\nSeperator';
    const outputDefaultText='Hello,comma,seperator';
  
  return (
    <div className="Container">
      {/* ---------Page header------- */}
      <div className='page-header'>
      <div className="p-3 mb-2 bg-light text-black" style={{fontSize:'30px',backgroundColor:'#ccc',textIndent:'1em'}} >Comma Separator</div>
        
          <ul className="nav justify-content-end">

            <li className="nav-item">
              <a className="nav-link active" href="App.js" style={{color:"rgb(98, 162, 219)"}}>Homepage</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./About.js" style={{color:"rgb(98, 162, 219)"}}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{color:"rgb(98, 162, 219)"}}>Link</a>
            </li>
            
          </ul>
      </div>
      {/* -------layout---------    -- */}
      <div className="container">
          <div className="row">
{/* -------------------------------input------------------------------------------------------------- */}          
            <div className="col-md">
             
              <div className="form-group">
              <nav className="navbar navbar-light" style={{backgroundColor: "rgb(205, 228, 248)"}}>
                        <a className="navbar-brand" herf='#' >Input :</a>
                    </nav>
                <textarea 
                onFocus={this.clearDefaultText}
                placeholder={inputDefaultText}
                className="form-control" 
                id="exampleFormControlTextarea1" 
                rows="23"
                onChange={this.changeInputValue}
                value={this.state.userInput}
                ></textarea>
              </div>

            </div>
{/* -------------------------------sidenav------------------------------------------------------------- */}
            
            
            <div className="sidenav" >
                    <nav className="navbar navbar-light" style={{backgroundColor: "rgb(205, 228, 248)"}}>
                        <a className="navbar-brand" herf='#' >Options :</a>
                    </nav>
                    <p style={{textAlign: 'center'}}>Seperator Char 
                    <input 
                    onChange={this.symbolChangeHandler}
                    name = 'symbolValue' 
                    type="text" maxLength="1" display="inline-display" 
                    placeholder="," aria-label="," 
                    style={{width: 17+'px', margin: 10+'px',  font:'inherit',fontWeight: 'bold'}}
                    /></p>
                    
                   

                    
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked/>
                    <label className="form-check-label" > </label>
                    No Quoto
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2"/>
                    <label className="form-check-label" >
                    Single Quoto
                    </label>
                    </div>
                    <div className="form-check ">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" defaultValue="option3" />
                    <label className="form-check-label" >
                    Double Quoto
                    </label>
                    </div>
                    
                

                   
                    
                    <button type="button" className="btn "  style={{margin:'15px 15px 15px 15px',backgroundColor:"rgb(205, 228, 248)"}}
                     onClick={this.onClickHandler} 
                    >Convert</button>
                   
                </div>
            
{/* -------------------------------output------------------------------------------------------------- */}
            <div className="col-md">

              <div className="form-group">
              <nav className="navbar navbar-light" style={{backgroundColor: "rgb(205, 228, 248)"}}>
                        <a className="navbar-brand" herf='#' >Output :</a>
                    </nav>
                  <textarea 
                  placeholder={outputDefaultText}
                  value={this.state.userOutput}
                  className="form-control" 
                  id="exampleFormControlTextarea2" 
                  rows="23"></textarea>
              </div>

            </div>
          </div>
        </div>
    </div>
  );
}
}

export default App;
