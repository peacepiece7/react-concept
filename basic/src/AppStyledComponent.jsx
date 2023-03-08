import React from "react"
import styled, { css } from "styled-components"

// * installation guide
// yarn add styled-components react-is

// * extentions
// vscode-styled-component (intellisense같음)

const Container = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  background-color: blue;
  color: black;
  ${(props) =>
    props.primary &&
    css`
      background: red;
      color: white;
    `};
`

export default function AppStyledComponent() {
  return (
    <div>
      <Container>Super Hector</Container>
      <Container primary>Super Vector</Container>
    </div>
  )
}
