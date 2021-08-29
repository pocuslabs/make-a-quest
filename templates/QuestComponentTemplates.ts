import { QuestComponentType, QuestComponent, QuestComponentTemplateIndex } from "~/app/interfaces"
import { QuestComponentBuilder } from "~/builders/QuestComponentBuilder"

const QuestComponentTemplates: QuestComponentTemplateIndex = {
	[QuestComponentType.Talk]: QuestComponentBuilder.build(QuestComponentType.Talk, "Talk Quest Example"),
	[QuestComponentType.Fetch]: QuestComponentBuilder.build(QuestComponentType.Fetch, "Fetch Quest Example"),
	[QuestComponentType.Destroy]: QuestComponentBuilder.build(QuestComponentType.Destroy, "Destroy Quest Example"),
};

export default QuestComponentTemplates