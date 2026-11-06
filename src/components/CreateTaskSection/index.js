import {
  Container,
  Heading,
  Form,
  InputContainer,
  Label,
  Input,
  Select,
  Option,
  AddTaskButtonContainer,
  AddTaskBtn,
} from './styledComponents'

const CreateTaskSection = props => {
  const {tagsList, taskTitle, tagId, onChangetaskTitle, onChangeTag, onSubmit} =
    props

  return (
    <Container>
      <Heading>Create a task!</Heading>
      <Form onSubmit={onSubmit}>
        <InputContainer>
          <Label htmlFor="task">Task</Label>
          <Input
            id="task"
            type="text"
            placeholder="Enter the task here"
            value={taskTitle}
            onChange={onChangetaskTitle}
          />
        </InputContainer>

        <InputContainer>
          <Label htmlFor="tag">Tags</Label>
          <Select id="tag" value={tagId} onChange={onChangeTag}>
            {tagsList.map(eachOption => (
              <Option key={eachOption.optionId} value={eachOption.optionId}>
                {eachOption.displayText}
              </Option>
            ))}
          </Select>
        </InputContainer>

        <AddTaskButtonContainer>
          <AddTaskBtn type="submit" disabled={taskTitle.length === 0}>
            Add Task
          </AddTaskBtn>
        </AddTaskButtonContainer>
      </Form>
    </Container>
  )
}

export default CreateTaskSection
