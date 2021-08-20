import styles from "~/styles/components/Story.module.css"

export default function Story({ data: { name } }) {
	return (
		<div className={styles.story}>
			{name}
		</div>
	)
}