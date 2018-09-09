/*import React, {Component} from 'react';

  const Logo = () => {
    return <div style={{ marginRight: auto}}>LOGO</div> 
  }

  const UserName = () => {
    return <div>USERNAME</div> 
  }

export class Header extends Component {

  render() {
    return (
      <header style={{display: 'flex', justifyContent: 'space-between'}}>
        <Logo />
        {this.props.withUser && <UserName />} // если в пропсах пришел withUser и есть UserName, 
                                              // то покажи компонент UserName. Так пишут джуны
        {/*<UserName />*//*}
      </header>
    );
  }
}*/

//как теперь написать со слотами? Убираем отсюда компоненты Лого и Юзернейм и переносим их в апп
import React, {Component} from 'react';

export class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    return nextProps.left !== this.props.left;
  }

  render() {
    return (
      <header style={{display: 'flex', justifyContent: 'space-between'}}>
        {this.props.left} // и тут не паримся, что сюда приходит из апп
        {this.props.right}
      </header>
    );
  }
}