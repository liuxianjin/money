import Layout from "components/Layout";
import React from "react";
import styled from "styled-components";
import TagsSection from "views/Money/TagsSection";
import NoteSection from "views/Money/NoteSection";
import CategorySection from "views/Money/CategorySection";
import NumberPadSection from "views/Money/NumberPadSection";
import useRecords from "hooks/useRecords";

const MyLayout = styled(Layout)`
  border: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
`
type Category = "+" | "-";
const defaultValue = {
  tags: [] as number [],
  note: '',
  category: '-' as Category,
  amount: "0"
}
const Money = () => {
  const [value, setValue] = React.useState(defaultValue)
  const {addRecord} = useRecords();
  // Partial 值可以是 value 中的任何属性 typeof value 取出 value 的类型
  const onChange = (obj: Partial<typeof value>) => {
    debugger
    setValue({...value, ...obj})
  }
  const onOk = () => {
    if (addRecord(value)) {
      alert('保存成功');
      setValue(defaultValue);
    }
  }
  return (
    <MyLayout>
      <TagsSection value={value.tags} onChange={(tags) => onChange({tags})}/>
      <NoteSection value={value.note} onChange={(note) => onChange({note})}/>
      <CategorySection value={value.category} onChange={(category) => onChange({category})}/>
      <NumberPadSection value={value.amount} onChange={(amount) => onChange({amount})} onOk={onOk}/>
    </MyLayout>
  )
}

export default Money;
