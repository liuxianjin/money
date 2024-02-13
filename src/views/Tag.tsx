import React from "react";
import {useParams} from "react-router-dom";
import useTags from "useTags";

const Tag: React.FC = (props) => {
  const {id} = useParams<{
    id: string;
  }>();
  const {findTag} = useTags();
  const tag = findTag(parseInt(id!));
  return (
    <div>{tag?.name}</div>
  )
}

export default Tag;
