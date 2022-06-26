import React from 'react'
import classes from './Post.module.css'

const Post = props => {
	return (
		<div>
			<div className={classes.post}>
				<div className='postImg'>
					<img
						src='https://photoshablon.com/_ph/44/179023506.jpg'
						alt='avatar'
					></img>
				</div>
				<div className='onePost'>{props.message}</div>
			</div>
			<div>
				<span>{props.like}</span>
			</div>
		</div>
	)
}

export default Post
