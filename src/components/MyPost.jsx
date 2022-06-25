import React from 'react'
import classes from './MyPost.module.css'

const MyPost = () => {
	return (
		<div className={classes.myPost}>
			<div className={classes.postName}>My Posts</div>
			<textarea
				// cols='98%'
				// rows='10'
				wrap='soft'
				className={classes.textField}
			></textarea>
			<input type='button' value='Enter' className={classes.buttonEnter} />
		</div>
	)
}

export default MyPost
