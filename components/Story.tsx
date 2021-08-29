import Link from "next/link"
import { useRouter } from "next/router"

import Quest from "~/components/Quest"
import { useAppSelector } from "~/app/hooks"
import styles from "~/styles/components/Story.module.css"

export default function Story({ slug }) {
	const story = useAppSelector((state) => state.stories[slug]);
	const newQuestPath = `/stories/${slug}/quests/new`;

	return (
		story ? (
			<div className={styles.story}>
				<header><h2 className={styles.storyName}>{story.name}</h2></header>
				<div className={styles.verticalRule} />
				<div className={styles.questList}>
					{Object.keys(story.quests).length > 0 ? (
						Object.entries(story.quests).map(([questSlug, quest]) => (
							<Quest key={quest.slug} storySlug={slug} questSlug={questSlug} />
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
		) : (
			<p>Story not found</p>
		)
		
	)
}