import Link from "next/link"
import Quest from "~/components/Quest"

import styles from "~/styles/components/Story.module.css"

export default function Story({ data: { slug, name, quests = [] } }) {
	const newQuestPath = `/stories/${slug}/quests/new`;

	return (
		<div className={styles.story}>
			<h2 className={styles.storyName}>{name}</h2>
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