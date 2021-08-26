import { QuestComponentType, QuestComponent, QuestComponentTemplateIndex } from "~/app/interfaces"
import { QuestComponentBuilder } from "~/builders/QuestComponentBuilder"

const QuestComponentTemplates: QuestComponentTemplateIndex = {
	[QuestComponentType.Talk]: QuestComponentBuilder.build(QuestComponentType.Talk),
	[QuestComponentType.Fetch]: QuestComponentBuilder.build(QuestComponentType.Fetch),
	[QuestComponentType.Destroy]: QuestComponentBuilder.build(QuestComponentType.Destroy),
};

export default QuestComponentTemplates