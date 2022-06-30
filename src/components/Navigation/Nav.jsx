import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Nav.module.css'

const Nav = () => {
	return (
		<nav className={classes.nav}>
			<div className={classes.textBackground}>
				<div className={classes.item}>
					<NavLink to='/profiles'>Profiles</NavLink>
				</div>
				<div className={classes.item}>
					<NavLink to='/dialogs'>Messages</NavLink>
				</div>
				<div className={classes.item}>
					<NavLink to='/news'>News</NavLink>
				</div>
				<div className={classes.item}>
					<NavLink to='/music'>Music</NavLink>
				</div>
				<div className={`${classes.item} ${classes.itemSetting}`}>
					<NavLink to='/settings'>Settings</NavLink>
				</div>
			</div>
		</nav>
	)
}

export default Nav
