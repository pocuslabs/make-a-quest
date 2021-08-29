import * as allInterfaces from "~/app/interfaces"
import type { QuestComponentType } from "~/app/interfaces"

export const QuestComponentBuilder = {
	build(componentType: QuestComponentType, name: string, data?: any) {
		this.componentType = componentType;
		const componentTypeString = `${this.componentType}QuestComponent`;

		const makerFn = allInterfaces[componentTypeString];
		if (typeof makerFn !== "function") {
			throw new Error(`Invalid component type ${componentTypeString}`);
		}

		return new makerFn(name, data);
	}
}