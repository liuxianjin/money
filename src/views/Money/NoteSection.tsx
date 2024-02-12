import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`

const NoteSection = () => {
  const [note, setNote] = useState<string>("");
  const refInput = React.useRef<HTMLInputElement>(null);
  const onBlur = () => {
    // 失去焦点时，将输入框的值赋给note
    setNote(refInput.current?.value || "");
  }
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text" placeholder="在这里添加备注"
               ref={refInput}
               defaultValue={note}
               onBlur={onBlur}
        />
      </label>
    </Wrapper>
  )
}

export default NoteSection;
