import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import CreateTaskSection from '../CreateTaskSection'
import TaskViewSection from '../TaskViewSection'

import {Container} from './styledComponents'

class MyTaskApp extends Component {
  constructor(props) {
    super(props)
    const {tagsList} = this.props
    this.state = {
      taskTitle: '',
      tagId: tagsList[0].optionId,
      taskList: [],
      activeTabId: '',
    }
  }

  onChangeActiveTab = tabId => this.setState({activeTabId: tabId})

  onChangetaskTitle = event => this.setState({taskTitle: event.target.value})

  onChangeTag = event => this.setState({tagId: event.target.value})

  onSubmit = event => {
    event.preventDefault()

    const {taskTitle, tagId} = this.state
    const {tagsList} = this.props
    const taskData = {taskId: uuidv4(), taskTitle, tagId}

    this.setState(prevState => ({
      taskList: [...prevState.taskList, taskData],
      taskTitle: '',
      tagId: tagsList[0].optionId,
    }))
  }

  render() {
    const {tagsList} = this.props
    const {taskTitle, tagId, taskList, activeTabId} = this.state

    return (
      <Container>
        <CreateTaskSection
          taskTitle={taskTitle}
          tagId={tagId}
          tagsList={tagsList}
          onChangetaskTitle={this.onChangetaskTitle}
          onChangeTag={this.onChangeTag}
          onSubmit={this.onSubmit}
        />
        <TaskViewSection
          tagsList={tagsList}
          taskList={taskList}
          activeTabId={activeTabId}
          onChangeActiveTab={this.onChangeActiveTab}
        />
      </Container>
    )
  }
}

export default MyTaskApp
