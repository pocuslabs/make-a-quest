export const NOWHERE = -1;

enum EntityType {
	NPC,
	Item
};

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
export enum QuestComponentType {
	Talk,
	Fetch,
	Destroy
}

export class QuestComponent {
	constructor(componentType: QuestComponentType) {
		this.componentType = componentType;
	}
}

export class Quest {
	constructor(name: string, components?: Array<QuestComponent>) {
		this.name = name;
		this.components = components;
	}
}

export interface QuestIndex {
	[key: string]: Quest;
}

export interface Story {
	name: string;
	quests: QuestIndex;
}

export interface StoryIndex {
	[key: string]: Story;
}

export interface GameState {
	name: string;
	stories: StoryIndex;
};