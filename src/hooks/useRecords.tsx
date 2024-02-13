import {useEffect, useState} from "react";
import useUpdate from "./useUpdate";

type RecordItem = {
  tags: number[]
  note: string
  category: "+" | "-"
  amount: string,
  createdAt: string
}
//  省略createdAt的类型
type newRecordItem = Omit<RecordItem, 'createdAt'>

const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(localStorage.getItem('records') || '[]'));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records])
  const addRecord = (newRecord: newRecordItem) => {
    if (parseFloat(newRecord.amount) <= 0) {
      alert("请输入金额");
      return false;
    }
    if (newRecord.tags.length === 0) {
      alert("请选择标签");
      return false;
    }
    const record = {...newRecord, createdAt: new Date().toISOString()}
    setRecords([...records, record]);
    return true;
  }
  return {records, addRecord}
}
export default useRecords;
