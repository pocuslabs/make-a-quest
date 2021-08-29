import Link from "next/link"

import { useAppSelector } from "~/app/hooks"
import Story from "~/components/Story"
import styles from "~/styles/components/StoryConfig.module.css"

export default function StoryConfig(props) {
	const stories = useAppSelector((state) => state.stories)

	return (
		<div className={styles.storyConfig}>
			<Link href="/stories/new"><a>+ Create a Storyline</a></Link>

			{
				Object.keys(stories).length ? (
					Object.entries(stories).map(([slug, story]) => (
						<Story key={slug} slug={slug} />
					))
				) : (
					<p>No stories yet! Start by making one with the button at the top.</p>
				)
			}
		</div>
	)
}
