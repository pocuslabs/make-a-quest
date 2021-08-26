import { useForm } from "react-hook-form"
import { useAppDispatch } from "~/app/hooks"
import { useRouter } from "next/router"

import { makeStory } from "~/features/game/gameSlice"

import styles from "~/styles/pages/stories/new.module.css"

export default function NewStoryPage(props) {
	const { register, handleSubmit } = useForm();
	const dispatch = useAppDispatch();
	const router = useRouter();

	const submitHandler = ({ name }) => {
		dispatch(makeStory({ name }));
		router.push("/stories");
	};

	return (
		<div className={styles.newStory}>
			<form onSubmit={handleSubmit(submitHandler)}>
				<input type="text" {...register("name")} />
				<button type="submit">Start the story</button>
			</form>
		</div>
	);
}
