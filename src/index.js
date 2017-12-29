import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import Show from './Show';

const Container = styled.div`
  width: 100%;
  text-align: center;
`;
const Input = styled.input`
width: 300px;
height: 40px;
margin-bottom: 10px;
padding-left: 8px;
box-sizing: border-box;
font-size: 1em;
border: 2px solid #3F51B5;
::-webkit-input-placeholder{
  color: black;
}
`;
const Button = styled.button`
border: none;
font-size: 1em;
padding: 10px 50px;
background-color: #3F51B5;
color: white;
`;


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      monto: null,
      tna: null,
      share: false
    }
    this.update = this.update.bind(this);
    this.calcular = this.calcular.bind(this);
  }
  resultado = [];
  total = 0;
  meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  update(e){
    const state = this.state;
    state[e.target.name] = parseInt(e.target.value);
    this.setState(state);
  }
  calcular(){
    this.setState({ share: false } )
    this.resultado = [];
    this.total = this.state.monto;
    for(var i = 0; i < 12; i++){
      this.total += (((this.total * this.state.tna) / 100) / 12);
      this.resultado.push({mes: this.meses[i], total: parseInt(this.total)})
    }
    if(this.resultado.length > 0) this.setState(prevState => {share: false}) //this.setState({data: {share: true}})
  }

  render(){
    
    return(
      <Container>
        <h1 style={{fontFamily: 'Roboto'}}>Calculadora de inversion</h1>
        <Input type="number" className="form-control" placeholder="Monto" name="monto" onChange={this.update}/>
        <br />
        <Input type="number" placeholder="TNA" name="tna" onChange={this.update}/>
        <br />
        <Button onClick={this.calcular}>Calcular</Button>
        <br />
        <Show data={this.resultado} />
      </Container>
    )
  }
}

render(<App />, document.getElementById('root'));
