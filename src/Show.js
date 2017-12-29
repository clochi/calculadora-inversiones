import React from 'react';

class Show extends React.Component {
  constructor(props) {
    super(props);
  }
  showThis;

  render() {
    if(this.props.data.length > 0){
      this.showThis = (
        <ul style={{listStyle: 'none'}}>
          {this.props.data.map(data => <li key={data.mes}>{data.mes} - {data.total}</li>)}
        </ul>
      )
    }else{
      this.showThis = 'No hay datos cargados'
    }
    
    return (
      this.showThis
    )
  }
}

export default Show;
/**console.log(this.props)
    if(this.props.data.length > 0){
      this.showing = (
        <ul>
          {this.props.data.map(data => <li key={data.mes}>{data.mes} - {data.total}</li>)}
        </ul>
      )
    }else{
      this.showing = 'No hay datos para mostrar todavía.'
    } */