import { useForm } from "react-hook-form"

import useGame from "~/hooks/useGame"
import styles from "~/styles/pages/stories/new.module.css"

export default function NewStoryPage(props) {
	const { register, handleSubmit } = useForm();
	const { state, setState } = useGame();

	const submitHandler = ({ name }) => {
		
	};

	return (
		<div className={styles.newStory}>
			<form onSubmit={handleSubmit(submitHandler)}>
				<input type="text" name="name" ref={register()} />
				<button type="submit">Start the story</button>
			</form>
		</div>
	);
}
