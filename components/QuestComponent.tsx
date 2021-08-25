import { useDrag } from 'react-dnd'

const ITEM_TYPE = "questComponent";

const ComponentTemplates = {
	// talk to a specific NPC
	Talk: {
		data: {
			npc: null
		}
	},

	// destroy an enemy or an item
	Destroy: {
		data: {
			entity: null,	// entities have a location property, no need to replicate
			entityType: null	// One of EntityType's properties
		}
	},

	// fetch an item from somewhere
	Fetch: {
		name: "Fetch",
		data: {
			item: null
		}
	}
};

export default function QuestComponentRender({ data }) {
	return (
		<div className={styles.questComponent}>

		</div>
	)
}
