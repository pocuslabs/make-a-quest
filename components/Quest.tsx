import { useAppSelector } from "~/app/hooks"
import QuestComponentConfig from "~/components/QuestComponentConfig"
import styles from "~/styles/components/Quest.module.css"

export default function Quest({ storySlug, questSlug, fullView = false }) {
	const quest = useAppSelector((state) => state.stories[storySlug]?.quests[questSlug])

	return quest ? (
		<div className={styles.quest}>
			<h3 className={styles.nameHeading}>{quest.name}</h3>

			{fullView && (
				<QuestComponentConfig storySlug={storySlug} questSlug={questSlug} />
			)}
		</div>
	) : (
		<p>Loading...</p>
	)
}