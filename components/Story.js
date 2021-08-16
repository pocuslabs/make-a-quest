import styles from "~/styles/components/Story.module.css"

export default function Story({ data }) {
	return (
		<div className={styles.story}>
			{data.name}
		</div>
	)
}