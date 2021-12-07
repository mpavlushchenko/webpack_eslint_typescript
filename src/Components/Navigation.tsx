import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

interface MouseEvent extends React.MouseEvent<HTMLElement> {
  key: string;
}

const Navigation = () => {
  const [active, setActive] = useState('home');

  const handleClick = () => (event: MouseEvent) => {
    setActive(event.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[active]} mode="horizontal">
      <Menu.Item key="home">
        <NavLink exact to="/">
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item key="photos">
        <NavLink to="/photos">Photos</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
