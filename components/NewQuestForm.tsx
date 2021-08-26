import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"

import { useAppDispatch } from "~/app/hooks"
import { makeQuest } from "~/features/game/gameSlice"
import QuestComponent from "~/components/QuestComponent"
import QuestComponentTemplates from "~/templates/QuestComponentTemplates"
import styles from "~/styles/components/NewQuestForm.module.css"

export default function NewQuestForm(props) {
	const { register, handleSubmit } = useForm();
	const dispatch = useAppDispatch();
	const router = useRouter();
	const components = useState([]);

	const submitHandler = ({ name }) => {
		const story = router.query.storySlug;

		dispatch(makeQuest({
			name,
			components,
			story
		}))
	};

	return (
		<div className={styles.newQuest}>
			<form onSubmit={handleSubmit(submitHandler)}>
				<div className={styles.inputGroup}>
					<input type="text" {...register("name", {
						required: true
					})} />
				</div>

				<div className={styles.inputGroup}>
					<div className={styles.panels}>
						<div className={styles.componentPanel}>
							{Object.entries(QuestComponentTemplates).map(([key, component]) => (
								<QuestComponent key={key} data={component} />
							))}
						</div>

						<div className={styles.questPanel}>
							{components.map((component) => (
								<QuestComponent key={component.id} data={component} />
							))}
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}