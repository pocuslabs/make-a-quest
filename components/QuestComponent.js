import { useDrag } from 'react-dnd'

const ITEM_TYPE = "questComponent";

const EntityType = {
	NPC: "NPC",
	Item: "Item"
};

const NOWHERE = -1;

class Location {
	// a Location's x and y refer to the tile where an Entity can be found
	constructor(x = NOWHERE, y = NOWHERE) {
		this.x = x;
		this.y = y;
	}
}

class Entity {
	constructor(name, location) {
		if (!name) {
			throw new Error("You must pass a unique name to the NPC constructor.");
		}

		if (!location) {
			location = new Location();
		}

		this.name = name;
		this.location = location;
	}
}

class NPC extends Entity {
	constructor(name, location, { dialogue }) {
		super(name, location);
		this.dialogue = dialogue;
	}
}

class Item extends Entity {
	constructor(name, location, { properties }) {
		super(name, location);
		this.properties = properties;
	}
}

class ItemProperties {
	constructor(item, { })
}

class QuestComponent {
	constructor(componentType) {
		if (!componentType) {
			throw new Error("You must pass a componentType parameter to the QuestComponent constructor.");
		}

		this.componentType = componentType;
	}
}

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
