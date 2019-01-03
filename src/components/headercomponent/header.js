import React, { Component } from 'react';
import NavLink from './navlinks';


class Header extends Component {
  render() {
    return (


    <header>
      <nav>
        <ul>
<li><NavLink exact to="/">About Me</NavLink>
</li>
<li>
<NavLink to="./casestudy">My Work</NavLink>
</li>
        </ul>

      </nav>
    </header>

    );
  }
}



export default Header;
