import {useState} from "react";
import createId from "lib/createId";

type Tag = {
  id: number;
  name: string;
}
let defaultTags: Tag[] = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'},
]
const useTags = () => {
  const [tags, setTags] = useState<Tag[]>(defaultTags);
  const findTag = (id:number) => tags.find(t => t.id === id);
  return {tags, setTags, findTag};
}

export default useTags;
