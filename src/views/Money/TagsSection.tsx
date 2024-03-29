import styled from "styled-components";
import React from "react";
import useTags from "hooks/useTags";

const Wrapper = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol {
    margin: 0 -12px;
    > li {
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected {
        background-color: #f60;
      }
    }
  }
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;
type Props = {
  value: number [];
  onChange: (value: number[]) => void;
}

const TagsSection: React.FC<Props> = (props) => {
  const {tags, addTag} = useTags();
  const selectedTags = props.value;
  const onToggleTag = (tag: number) => {
    if (selectedTags.includes(tag)) {
      props.onChange(selectedTags.filter(t => t !== tag))
    } else {
      props.onChange([...selectedTags, tag])
    }
  }

  const getClass = (tag: number) => selectedTags.includes(tag) ? 'selected' : '';

  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id} onClick={
            () => onToggleTag(tag.id)
          } className={getClass(tag.id)}>{tag.name}</li>
        )}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  )
}

export default TagsSection;
