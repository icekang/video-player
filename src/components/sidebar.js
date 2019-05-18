import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css';
import {Route} from 'react-router-dom';

class SideBar extends Component {
  constructor(props){
      super(props)
      this.state = {
          code: ""
      }
  }
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let foo = params.get('code');

    return (
        <Menu>
            <a id="home" className="menu-item" href="/">
                <i className="fa fa-fw fa-comment-o"></i>
                <span>HOME</span>
            </a>
            <a id="about" className="menu-item" href="/about">
                <i className="fa fa-fw fa-comment-o"></i>
                <span>ABOUT</span>
            </a>
            <a id="contact" className="menu-item" href="/contact">
                <i className="fa fa-fw fa-comment-o"></i>
                <span>CONTACT</span>
            </a>
            <a onClick={ this.showSettings } className="menu-item--small" href="">
                <i className="fa fa-fw fa-comment-o"></i>
                <span>SETTING</span>
            </a>
            <form action="https://mycourseville.com/api/oauth/authorize?">
                <input type="hidden" name="response_type" value="code" />
                <input type="hidden" name="client_id" value="4HIRWMM8UBHFUVNNIYAH2IUCRDAX12Q8L99T5CUU" />
                <input type="hidden" name="redirect_uri" value="http://webcourseville-demo.tk" />
                <input type="submit" value="login"/>
                <span>{foo}</span>
            </form>
        </Menu>
    );
  }
}

export default SideBar;