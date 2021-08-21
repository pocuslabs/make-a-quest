import Link from "next/link"
import { useSelector } from "react-redux"

import Story from "~/components/Story"
import styles from "~/styles/components/StoryConfig.module.css"

export default function StoryConfig(props) {
	const stories = useSelector((state) => state.stories)

	return (
		<div className={styles.storyConfig}>
			<Link href="/stories/new"><a>+ Create a Storyline</a></Link>

			{
				Object.keys(stories).length ? (
					Object.entries(stories).map(([id, story]) => (
						<Story key={story.id} data={story} />
					))
				) : (
					<p>No stories yet! Start by making one with the button at the top.</p>
				)
			}
		</div>
	)
}
