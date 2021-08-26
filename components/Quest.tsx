import { useRouter } from "next/router"

import { useAppSelector } from "~/app/hooks"

import styles from "~/styles/components/Quest.module.css"

export default function Quest({ data }) {
	const router = useRouter();
	const { storySlug, questSlug } = router.query;
	const quest = useAppSelector((state) => state.stories[storySlug].quests[questSlug])

	return (
		<div className={styles.quest}>{quest.name}</div>
	)
}