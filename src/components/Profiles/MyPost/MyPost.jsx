import React from 'react'
import classes from './MyPost.module.css'
import Post from './Post/Post'

const MyPost = () => {
	return (
		<div>
			<div className={classes.myPost}>
				<div className={classes.postName}>My Posts</div>
				<textarea wrap='soft' className={classes.textField}></textarea>
				<button className={classes.buttonEnter}>Enter</button>
			</div>
			<Post message='hey, how i you' like='15' />
			<Post message='okay, i am ok' like='30' />
		</div>
	)
}

export default MyPost
