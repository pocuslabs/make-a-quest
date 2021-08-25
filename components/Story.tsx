import Link from "next/link"
import Quest from "~/components/Quest"

import styles from "~/styles/components/Story.module.css"

export default function Story({ data: { id, name, quests = [] } }) {
	const newQuestPath = `/stories/${id}/quests/new`;

	return (
		<div className={styles.story}>
			<span className={styles.storyName}>{name}</span>
			<div className={styles.verticalRule} />
			<div className={styles.questList}>
				{quests.length > 0 ? (
					quests.map((quest) => (
						<Quest key={quest.id} data={quest} />
					))
				) : (
					<Link href={newQuestPath}>
						<a>
							<button className={styles.newQuest}>
								+ Add a Quest
							</button>
						</a>
					</Link>
				)}
			</div>
		</div>
	)
}