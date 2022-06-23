import React from 'react'

const Profiles = () => {
	return (
		<div className='content'>
			<div className='contentLogo'>
				<img
					src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
					alt='logo'
				></img>
			</div>
			<div className='avatar'>
				<div className='imgAvatar'>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToRM2GhJ8oj7e99T8KE1HYWhnHJ-KxawgxIw&usqp=CAU'
						alt='avatar'
					></img>
				</div>
				<div className='profile'> Profile Information</div>
			</div>
		</div>
	)
}

export default Profiles
