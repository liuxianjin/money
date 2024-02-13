import Layout from "../components/Layout";
import React, {useEffect} from "react";
import CategorySection from "./Money/CategorySection";
import styled from "styled-components";
import Space from "../components/Space";
import useTags from "../hooks/useTags";
import useRecords, {RecordItem} from "../hooks/useRecords";
import day from "dayjs"

const CategoryWrapper = styled.div`
  background: #fff;
`
const StatisticsWrapper = styled.div`
  height: calc(100vh - 56px - 61px);
  background: #F4F4F4;
  time {
    padding: 15px;
    height: 50px;
  }
  div {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #fff;
    div:nth-child(2) {
      margin-left: 15px;
      flex: 1;
    }
  }
  div:first-child {
    background-color: #F4F4F4;
  }
`
const Statistics = () => {
  const [category, setCategory] = React.useState<"-" | "+">('-');
  const {records} = useRecords();
  const {getName} = useTags();
  const hash: { [k: string]: RecordItem[] } = {}
  const selectedRecords = records.filter(r => r.category === category);
  selectedRecords.map(r => {
    const key = day(r.createdAt).format('YYYY-MM-DD');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  })
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category} onChange={category => setCategory(category)}/>
      </CategoryWrapper>
      <StatisticsWrapper>
        {
          selectedRecords.map((record) => {
            return (
              <section key={record.createdAt}>
                <div>
                  <span>{day(record.createdAt).format('YYYY年MM月DD日')}</span>
                  <span>￥124</span>
                </div>
                <div>
                  <span>{getName(record.tags[0])}</span>
                  <span>{record.note}</span>
                  <span>￥{record.amount}</span>
                </div>
              </section>
            )
          })
        }
      </StatisticsWrapper>
    </Layout>
  )
}

export default Statistics;
