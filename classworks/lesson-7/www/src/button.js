import React, { Component } from 'react';

class DangerButton extends Component {

  render() {
    console.log(this.props);//пустой объект
    return (
        <button className='danger-button' ref={this.props.forwardRef}>DANGER BUTTON</button>
        <DangerButton ref={this.myRefButton} />
    );
  }
}

export const DangerButton = React.forwardRef(render: (props, forwardRef) => {
  return <DangerButtonComponent {...props, forwardRef}/>
})

export default DangerButton;