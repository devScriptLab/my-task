import styled from 'styled-components/macro'

export const Container = styled.div`
  background-color: #131213;
  padding: 58px;
  @media screen and (min-width: 768px) {
    width: 40%;
    height: 100%;
  }
`
export const Heading = styled.h1`
  color: #f3aa4e;
  font-family: 'Roboto';
  font-size: 38px;
  font-weight: 500;
  text-align: center;
`

export const Form = styled.form`
  width: 100%;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  margin-bottom: 32px;
`

export const Label = styled.label`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  cursor: pointer;
`

export const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 4px;
  outline: none;
  height: 45px;
  margin-top: 10px;
  padding-left: 12px;
`

export const Select = styled.select`
  width: 100%;
  border: none;
  border-radius: 4px;
  outline: none;
  height: 45px;
  margin-top: 10px;
  cursor: pointer;
`

export const Option = styled.option`
  color: #000000;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
`

export const AddTaskButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AddTaskBtn = styled.button`
  background-color: #f3aa4e;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  width: 150px;
  height: 45px;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
`
