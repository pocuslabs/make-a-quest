import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"

import QuestComponent, { ComponentTemplates } from "~/components/QuestComponent"
import styles from "~/styles/components/NewQuestForm.module.css"

export default function NewQuestForm(props) {
	const { register, handleSubmit } = useForm();
	const dispatch = useDispatch();
	const router = useRouter();
	const components = useState([]);

	const submitHandler = ({ name }) => {
		dispatch(makeQuest({
			name,
			components
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
							{Object.entries(ComponentTemplates).map(([key, component]) => (
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