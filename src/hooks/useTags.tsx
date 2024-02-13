import {useEffect, useState} from "react";
import createId from "lib/createId";
import useUpdate from "hooks/useUpdate";

type Tag = {
  id: number;
  name: string;
}

const useTags = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0){
      localTags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'},
      ];
    }
    setTags(localTags);
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags])
  const findTag = (id: number) => tags.find(t => t.id === id);
  const findTagIndex = (id: number) => tags.findIndex(t => t.id === id);
  const updateTag = (id: number, obj: { name: string }) => {
    setTags(tags.map(t => t.id === id ? {...t, name: obj.name} : t));
  }
  const deleteTag = (id: number) => {
    setTags(tags.filter(t => t.id !== id));
  }
  const addTag = () => {
    let tag: string | null = window.prompt("请输入标签名");
    if (tag) setTags([...tags, {id: createId(), name: tag}]);
  }
  return {tags, setTags, findTag, updateTag, findTagIndex, deleteTag, addTag};
}

export default useTags;
