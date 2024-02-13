import React from "react";
import {useParams} from "react-router-dom";
import useTags from "hooks/useTags";
import Layout from "components/Layout";
import Icon from "components/Icon";
import Button from "components/Button";
import styled from "styled-components";
import Input from "../components/Input";
import Center from "../components/Center";
import Space from "../components/Space";

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;
const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`;

type Params = {
  id: string
}

const Tag: React.FC = (props) => {
  let {id} = useParams<Params>() as Params;
  const {findTag, updateTag, deleteTag} = useTags();
  const tag = findTag(parseInt(id));
  const tagContent = (tag: { id: number, name: string }) => (
    <div>
      <InputWrapper>
        <Input label="标签名" type="text" placeholder="标签名" value={tag.name}
               onChange={(e) => {
                 updateTag(tag.id, {name: e.target.value})
               }}>
        </Input>
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={() => {
          deleteTag(tag.id);
        }}>删除标签</Button>
      </Center>
    </div>
  )
  const onclickBack = ()=>{
      window.history.back();
  }

  return (
    <Layout>
      <Topbar>
        <Icon name="left" onClick={onclickBack}></Icon>
        <span>编辑标签</span>
        <span></span>
      </Topbar>
      {
        tag ? tagContent(tag) : <div>tag不存在</div>
      }
    </Layout>
  )
}

export default Tag;
