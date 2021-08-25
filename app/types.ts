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