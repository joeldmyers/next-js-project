import React, { Component } from 'react';
import Link from 'next/link';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <nav>
        <Link href="/about">
          <a title="About Next JS">About Next JS</a>
        </Link><br /><br />
        <Link href="/">
          <a title="Our API">Our API</a>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
