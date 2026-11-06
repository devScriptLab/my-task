import {
  Container,
  Heading,
  TagsList,
  TagItem,
  TagButton,
  TasksList,
  TaskName,
  TaskItem,
  DisplayTag,
  NoTaskViewContainer,
  NoTask,
} from './styledComponents'

const TaskViewSection = props => {
  const renderTags = () => {
    const {tagsList, activeTabId, onChangeActiveTab} = props

    return (
      <>
        <Heading>Tags</Heading>
        <TagsList>
          {tagsList.map(eachTag => {
            const onClickTab = () => onChangeActiveTab(eachTag.optionId)

            return (
              <TagItem key={eachTag.optionId}>
                <TagButton
                  type="button"
                  onClick={onClickTab}
                  isActive={activeTabId === eachTag.optionId}
                >
                  {eachTag.displayText}
                </TagButton>
              </TagItem>
            )
          })}
        </TagsList>
      </>
    )
  }

  const renderNoTasksView = () => (
    <NoTaskViewContainer>
      <NoTask>No Tasks Added Yet</NoTask>
    </NoTaskViewContainer>
  )

  const renderTasks = () => {
    const {taskList, tagsList, activeTabId} = props

    const filteredTaskList = taskList.filter(eachTask =>
      eachTask.tagId.includes(activeTabId),
    )

    const getTagName = tagId =>
      tagsList.find(eachOption => eachOption.optionId === tagId).displayText

    return (
      <>
        <Heading>Tasks</Heading>
        {filteredTaskList.length === 0 ? (
          renderNoTasksView()
        ) : (
          <TasksList>
            {filteredTaskList.map(eachTask => (
              <TaskItem key={eachTask.taskId}>
                <TaskName>{eachTask.taskTitle}</TaskName>
                <DisplayTag>{getTagName(eachTask.tagId)}</DisplayTag>
              </TaskItem>
            ))}
          </TasksList>
        )}
      </>
    )
  }

  return (
    <Container>
      {renderTags()}
      {renderTasks()}
    </Container>
  )
}

export default TaskViewSection
