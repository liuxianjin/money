import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";
import TagsSection from "views/Money/TagsSection";
import NoteSection from "views/Money/NoteSection";
import CategorySection from "views/Money/CategorySection";
import NumberPadSection from "views/Money/NumberPadSection";

const MyLayout = styled(Layout)`
  border: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
`
type Category = "+" | "-";
const Money = () => {
  const [value, setValue] = React.useState({
    tags: [] as string [],
    note: '',
    category: '-' as Category,
    amount: 0
  })

  return (
    <MyLayout>
      <TagsSection value={value.tags} onChange={(tags) =>
        setValue({...value, tags})
      }/>
      <NoteSection value={value.note} onChange={(note) =>
        setValue({...value, note})
      }/>
      <CategorySection value={value.category} onChange={(category) =>
        setValue({...value, category})
      }/>
      <NumberPadSection value={value.amount} onChange={(amount) =>
        setValue({...value, amount})
      }/>
    </MyLayout>
  )
}

export default Money;
