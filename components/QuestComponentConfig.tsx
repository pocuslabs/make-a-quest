import { useAppSelector } from "~/app/hooks"
import QuestComponentTemplates from "~/templates/QuestComponentTemplates"
import QuestComponent from "~/components/QuestComponent"
import QuestComponentTemplate from "~/components/QuestComponentTemplate"
import styles from "~/styles/components/QuestComponentConfig.module.css"

export default function QuestComponentConfig({ storySlug, questSlug }) {
	const quest = useAppSelector((state) => state.stories[storySlug]?.quests[questSlug])

  return quest ? (
    <div className={styles.inputGroup}>
      <div className={styles.panels}>
        <div className={styles.componentPanel}>
          {Object.entries(QuestComponentTemplates).map(([key, component], idx) => (
            <QuestComponentTemplate key={key} component={component} />
          ))}
        </div>

        <div className={styles.questPanel}>
          {quest.components?.length ? (
              quest.components.map((component, idx) => (
                <QuestComponent key={idx} component={component} />
              ))
            ) : (
              <button className={styles.addComponent}>+ Add Component</button>
            )
          }
        </div>
      </div>
    </div>
  ) : null
}
