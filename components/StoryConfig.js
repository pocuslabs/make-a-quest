import Link from "next/link"

import Story from "~/components/Story"
import useGame from "~/hooks/useGame"
import styles from "~/styles/components/StoryConfig.module.css"

export default function StoryConfig(props) {
	const { state, setState, resetState } = useGame();

	return (
		<div className={styles.storyConfig}>
			<Link href="/storylines/new"><a>+ Create a Storyline</a></Link>

			{
				state.stories.length ? (
					state.stories.map(story => (
						<Story key={story.id} data={story} />
					))
				) : (
					<p>No stories yet! Start by making one with the button at the top.</p>
				)
			}
		</div>
	)
}
