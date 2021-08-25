export const NOWHERE = -1;

export enum EntityType {
	NPC,
	Item
};

export interface Location {
	x: number;
	y: number;
}

export interface Entity {
	name: string;
	location: Location;
}

export type Dialogue = object;

export interface NPC extends Entity {
	dialogue: Dialogue;
}

type PropertyType = string | number | boolean;

export interface PropertyIndex {
	[key: string]: PropertyType
}

export interface Item extends Entity {
	properties: PropertyIndex
}

export class ItemProperties {
	constructor(item, { })
}

export enum QuestComponentType {
	Talk,
	Fetch,
	Destroy
}

export class TalkQuestComponent {
	
}

export class QuestComponent {
	constructor(componentType: QuestComponentType) {
		this.componentType = componentType;
		const componentTypeString = `${this.componentType}QuestComponent`;

		const makerFn = global[componentTypeString];
	}

	// TODO: implement a toString method that will fill in a template string with
	// the quest component details (built from the componentType and props)
}

export interface QuestComponentTemplateIndex {
	[key: QuestComponentType]: QuestComponent
}

export class Quest {
	constructor(name: string, components?: Array<QuestComponent>) {
		this.name = name;
		this.components = components;
	}

	// TODO: methods to update components
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
