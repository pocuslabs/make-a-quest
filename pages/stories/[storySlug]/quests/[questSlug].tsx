import { useRouter } from "next/router"

import Quest from "~/components/Quest"
import { useAppSelector } from "~/app/hooks"

export default function QuestPage(props) {
	const { query: { storySlug, questSlug }} = useRouter();
	
	return <Quest storySlug={storySlug} questSlug={questSlug} fullView={true} />
}
