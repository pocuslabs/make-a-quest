import styles from "~/styles/components/Quest.module.css"

export default function Quest({ data: { id, name }}) {
	return (
		<div className={styles.quest}>{name}</div>
	)
}