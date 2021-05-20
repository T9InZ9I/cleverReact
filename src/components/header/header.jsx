import React from 'react';

import logo from '../assets/logo.svg';

import './header.css';

export class Header extends React.Component {
    render() {
        return(
            <div className="header"><img className="logo" src={logo} alt="logo"/>
                <h1 align="center">14,15,16 апреля! Праздничное открытие! Магазин промтоваров Галамарт</h1>
        <p><small>В честь праздника:</small></p>
        <p>
          <b><ins>При покупке от 500 рублей</ins></b> - гарантинованный <b>ПОДАРОК</b>
        </p>
        <p>
          <b><ins>Главный подарок - СЕРТИФИКАТ</ins></b> на покупки <font color="red"><b>30 000</b></font> рублей (разыгрывается между посетителями).
        </p>
        <p>
          <i><font color="red">Обладатель опроделится 16 апреля в 16<sup>00.</sup></font></i> <i>Наш адрес: г. Минск, пр. Победителей 20.</i>
        </p>
        <hr />
            </div>
        )
    }
};