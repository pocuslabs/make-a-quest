import { QuestComponentType, QuestComponent, QuestComponentTemplateIndex } from "~/app/interfaces"

const QuestComponentTemplates: QuestComponentTemplateIndex = {
	[QuestComponentType.Talk]: new QuestComponent(QuestComponentType.Talk),
	[QuestComponentType.Fetch]: new QuestComponent(QuestComponentType.Fetch),
	[QuestComponentType.Destroy]: new QuestComponent(QuestComponentType.Destroy),
};

export default QuestComponentTemplates