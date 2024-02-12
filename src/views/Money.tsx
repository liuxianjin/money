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
const Money = () => {
  return (
    <MyLayout>
      <TagsSection />
      <NoteSection />
      <CategorySection />
      <NumberPadSection />
    </MyLayout>
  )
}

export default Money;
