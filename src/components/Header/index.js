import React, { Component } from 'react'
import styles from './index.module.scss'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import snekImage from './snek.png'

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <Helmet>
          <link rel="shortcut icon" href={snekImage} />
          <meta property="og:image" content={snekImage} />
        </Helmet>
        <Link to="/">
          <img src={snekImage} alt="Snektective logo" />
          <h1 className={styles.name}>Sneknet</h1>
        </Link>
        <div className={styles.links}>
          <a href="https://github.com/Snektective">github</a>
          <a href="https://discord.gg/BmDexHw">discord</a>
          <a href="https://www.reddit.com/r/snakeroomalliance/">
            /r/snakeroomalliance
          </a>
          <a href="https://www.reddit.com/r/sequence_meta/">/r/sequence_meta</a>
          <a href="https://twitter.com/snekroom">twitter</a>
        </div>
      </header>
    )
  }
}

export default Header