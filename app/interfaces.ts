import type { Dialogue } from "~/app/types"

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
	toString: () => string;
}

export interface NPC extends Entity {
	dialogue: Dialogue;
}

export interface Enemy extends Entity {
	dialogue?: Dialogue;
}

type PropertyType = string | number | boolean;

export interface PropertyIndex {
	[key: string]: PropertyType
}

export interface Item extends Entity {
	properties: PropertyIndex
}

export enum QuestComponentType {
	Talk = "Talk",
	Fetch = "Fetch",
	Destroy = "Destroy"
}

interface TalkQuestData {
	npc: NPC
}

interface FetchQuestData {
	item: Item;
	npc?: NPC;
}

interface DestroyQuestData {
	item?: Item;
	enemy?: Enemy;
	npc: NPC;
}

export interface QuestComponent {
	name: string;
	isFulfilled: boolean;
	data: any;
	toString: () => string;
}

export class TalkQuestComponent implements QuestComponent {
	name: string;
	isFulfilled: boolean;
	data: TalkQuestData;

	constructor(name: string, data: TalkQuestData) {
		this.name = name;
		this.data = data;
		this.isFulfilled = false;
	}

	toString() {
		return this.name;
	}
}

export class FetchQuestComponent implements QuestComponent {
	name: string;
	isFulfilled: boolean;
	data: FetchQuestData;
}

export class DestroyQuestComponent implements QuestComponent {
	name: string;
	isFulfilled: boolean;
	data: DestroyQuestComponent;
}

export type QuestComponentTemplateIndex = {
	[key in QuestComponentType]: QuestComponent
}

export class Quest {
	name: string;
	components?: Array<QuestComponent>

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
	id: string;
	name: string;
	slug: string;
	quests: QuestIndex;
}

export interface StoryIndex {
	[key: string]: Story;
}

export interface GameState {
	name: string;
	stories: StoryIndex;
};
