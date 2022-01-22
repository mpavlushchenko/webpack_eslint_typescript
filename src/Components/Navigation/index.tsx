import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

interface MouseEvent {
  key: string;
}

const Index = () => {
  const [active, setActive] = useState('home');

  const handleClick = (event: MouseEvent) => {
    setActive(event.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[active]} mode="horizontal">
      <Menu.Item key="home">
        <NavLink exact activeClassName="is-active" to="/">
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item key="photos">
        <NavLink activeClassName="is-active" to="/photos">
          Photos
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default Index;
