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
  const findTag = (id: number) => tags.find(t => t.id === id);
  const findTagIndex = (id: number) => tags.findIndex(t => t.id === id);
  const updateTag = (id: number, obj: { name: string }) => {
    const index = findTagIndex(id);
    const tagsClone = JSON.parse(JSON.stringify(tags));
    tagsClone[index] = {id: id, name: obj.name}
    setTags(tagsClone);
  }
  const deleteTag = (id: number) => {
    const index = findTagIndex(id);
    const tagsClone = JSON.parse(JSON.stringify(tags));
    tagsClone.splice(index, 1);
    setTags(tagsClone);
  }
  return {tags, setTags, findTag, updateTag, findTagIndex, deleteTag};
}

export default useTags;
