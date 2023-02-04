import { css } from "@emotion/react"

export const textareaContainerStyle = css`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`

export const getTextareaContentContainerStyle = (
  labelPosition: "left" | "right" | "top" = "left",
) => {
  return css`
    display: flex;
    flex: 1;
    flex-direction: ${labelPosition === "top" ? "column" : "row"};
  `
}
