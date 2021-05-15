import Image from 'next/image'
import Layout from '../components/layout'
import styled from 'styled-components'
import UtilsStyles from '../styles/utils.module.css'

const Avatar = styled.div`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  border: 1px solid black;

  @media (min-width: 768px) {
    float: right;
    margin-left: 5rem;
  }
`

export default function About() {
  return (
    <Layout>
      <h1>About Me</h1>
      <Avatar>
        <Image src="/images/profile.jpeg" alt="my avatar" width={150} height={150} className={UtilsStyles.borderCircle} />
      </Avatar>
      <div>Hi, I am daniel, a undergraduate student at <a href="http://www.sysu.edu.cn/cn/index.htm" target="__blank">Sun Yat-Sen University</a>, and my chinese name is 徐肯.</div>
      <h2>Timeline</h2>
      <ul>
        <li>2020.11 - 2021.1, Front-end development intern in <a href="https://www.fliggy.com" target="__blank" >fliggy</a>, Alibaba.</li>
        <li>2020.4 - 2020.7, Front-end development intern in <a href="https://www.wechat.com/" target="__blank" >WeChat</a>, Tencent. </li>
        <li>2017.9 - present, study in Sun Yat-Sen University.</li>
      </ul>
    </Layout>
  )
}