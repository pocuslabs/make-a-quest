import styles from "~/styles/components/QuestComponent.module.css"

export default function QuestComponentRender({ component }) {
	return component ? (
		<div className={styles.questComponent}>
			{component.name}
		</div>
	) : null
}
