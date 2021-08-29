import { useRouter } from "next/router"

import { useAppSelector } from "~/app/hooks"

import styles from "~/styles/components/Quest.module.css"

export default function Quest({ storySlug, questSlug }) {
	const quest = useAppSelector((state) => state.stories[storySlug]?.quests[questSlug])

	return (
		quest ? (
			<div className={styles.quest}>{quest.name}</div>
		) : (
			<p>Loading...</p>
		)
	)
}