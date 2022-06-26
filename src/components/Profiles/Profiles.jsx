import React from 'react'
import classes from './Profiles.module.css'
import MyPost from './MyPost/MyPost'

const Profiles = () => {
	return (
		<div className={classes.content}>
			<div className={classes.contentLogo}>
				<img
					src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
					alt='logo'
				></img>
			</div>
			<div className={classes.avatar}>
				<div className={classes.imgAvatar}>
					<img
						src='https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg'
						alt='avatar'
					></img>
				</div>
				<div className={classes.profileName}>Last name / First name</div>
			</div>
			<MyPost />
		</div>
	)
}

export default Profiles
