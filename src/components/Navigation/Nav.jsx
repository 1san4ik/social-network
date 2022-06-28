import React from 'react'
import classes from './Nav.module.css'

const Nav = () => {
	return (
		<nav className={classes.nav}>
			<div className={classes.textBackground}>
				<div className={classes.item}>
					<a href='/profiles'>Profiles</a>
				</div>
				<div className={classes.item}>
					<a href='/dialogs'>Messages</a>
				</div>
				<div className={classes.item}>
					<a href='http://localhost:3000/'>News</a>
				</div>
				<div className={classes.item}>
					<a href='http://localhost:3000/'>Music</a>
				</div>
				<div className={`${classes.item} ${classes.itemSetting}`}>
					<a href='http://localhost:3000/'>Settings</a>
				</div>
			</div>
		</nav>
	)
}

export default Nav
