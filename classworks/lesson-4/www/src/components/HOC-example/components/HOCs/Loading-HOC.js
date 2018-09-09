import React from 'react';

export const LoadingHOC = WrapperComponent => { // сюда пришел ContactListComponent
  class LoadingHOC extends React.Component {
    
    render() {
      console.log('FIRST RENDER');
       console.log(this.props); //contacts, filterText
      return this.props.contacts.length ? ( 
        <WrapperComponent {...this.props} />  //если есть юзеры в массиве, то отобрази их
      ) : (
        <div className="loader"/> // если нету – то отобрази спиннер
      );
    }
  }

  return LoadingHOC;
};



const ShowMyName = () => <div>Oleh</div>;
const ShowMyNameWithLoader = LoadingHOC(ShowMyName);




/*
*
*  Напишите HOC который будет расширять верстку у компонента
*  и добавлять 2 кнопки и СЧЕТЧИК!
*
* */