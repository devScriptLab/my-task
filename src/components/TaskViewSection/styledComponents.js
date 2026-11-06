import styled from 'styled-components/macro'

export const Container = styled.div`
  background-color: #000000;
  padding: 28px;
  @media screen and (min-width: 768px) {
    width: 60%;
    height: 100%;
    padding-top: 58px;
    padding-left: 24px;
    padding-right: 24px;
  }
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 500;
`

export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  width: 100%;
  padding-left: 0px;
`

export const TagItem = styled.li`
  list-style-type: none;
  margin-right: 12px;
  margin-bottom: 8px;
`

export const TagButton = styled.button`
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  padding: 6px 12px;
  outline: none;
  cursor: pointer;
  border-radius: 18px;
  border: 1px solid #ffffff;
  transition: background-color 0.3s ease;
`

export const TasksList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  height: 65vh;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #f3aa4e #000000;
`

export const TaskItem = styled.li`
  background-color: #18151a;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 18px;
  border-radius: 4px;
`

export const TaskName = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin: 0px;
`

export const DisplayTag = styled.p`
  background-color: #f3aa4e;
  color: #000000;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 18px;
`

export const NoTaskViewContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoTask = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 500;
`
