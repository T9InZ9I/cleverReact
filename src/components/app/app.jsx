import React from 'react';

import { Header } from '../header';

import './app.css';

export const App = (props) => (
    <div className="app">
        <Header />
        <h1 align="center">Продам картину <q>Дерево жизни</q>!</h1>
            <h2 align="center"><font color="red" face="arial">Продаю и другие работы, выполненые маслом.Картины на холстах (без рам), возможно оформление в раму за отдельную плату</font></h2>
            <p>
                <big><b>Размер:</b>40x60 см, состоит из 3 одинаковых по размеру частей</big>.
            </p>
            <p>
                <b>Цена:</b><del>6000</del> <font color="red">5500</font>рублей.
            </p>
            <p>
                <font color="red" face="arial">Принимаю заказы! Пишите, отвечу с удовольствием</font>
            </p>
            <p><b>Имя:</b> Александр</p>
            <p><b>Контактный телефон:</b> 238-77-65
            </p>
        </div>
);