import Layout from "../components/Layout";
import React from "react";
import CategorySection from "./Money/CategorySection";
import styled from "styled-components";
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
    span:nth-child(2) {
      margin-left: 15px;
      flex: 1;
    }
  }
  .header {
    justify-content: space-between;
    span:nth-child(2) {
      margin-left: 15px;
      flex: 1;
      text-align: right;
    }
    .total{
      font-weight: bold;
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
  selectedRecords.forEach(r => {
    const key = day(r.createdAt).format('YYYY-MM-DD');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  })
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  })
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category} onChange={category => setCategory(category)}/>
      </CategoryWrapper>
      <StatisticsWrapper>
        {
          array.map(([data, record]) => {
            return (
              <section key={data}>
                <div className="header">
                  <span>{day(data).format('YYYY年MM月DD日')}</span>
                  <span className="total">￥
                    <span>{
                      record.reduce((sum, item) => {
                        return sum + Number(item.amount);
                      }, 0).toFixed(2)
                    }</span>
                  </span>
                </div>
                {
                  record.map(record =>
                    <div key={record.createdAt}>
                      <span>{getName(record.tags[0])}</span>
                      <span>{record.note}</span>
                      <span>￥{Number(record.amount).toFixed(2)}</span>
                    </div>
                  )
                }
              </section>
            )
          })
        }
      </StatisticsWrapper>
    </Layout>
  )
}

export default Statistics;
