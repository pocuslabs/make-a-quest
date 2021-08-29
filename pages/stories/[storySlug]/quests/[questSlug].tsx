import { useRouter } from "next/router"

import Quest from "~/components/Quest"
import { useAppSelector } from "~/app/hooks"

export default function QuestPage(props) {
	const { query: { storySlug, questSlug }} = useRouter();
	const quest = useAppSelector((state) => state.stories[storySlug as string]?.quests[questSlug as string])
	
	return quest ? (
		<Quest storySlug={storySlug} questSlug={questSlug} />
	) : null;
}
