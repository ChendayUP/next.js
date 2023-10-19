import React from 'react'
import { GetServerSideProps } from 'next'

type RepoProps = {
  name: string
  description: string
  subscribers: number
  stars: number
  forks: number
}

const Repo: React.FC<RepoProps> = ({
  name,
  subscribers,
  stars,
  forks,
  description,
}: RepoProps) => {
  return (
    <>
      <h1>Inspecting: {name}</h1>
      <p>{description}</p>
      <ul>
        <li>Subscribers: {subscribers} 👀</li>
        <li>Stars: {stars} ⭐️</li>
        <li>Forks: {forks} 🍴</li>
        <li>Forks: {forks} 🍴</li>
        <li>Forks: {forks} 🍴123414</li>
      </ul>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<RepoProps> = async (
  ctx
) => {
  // const { owner, repo } = ctx.query;
  let owner = 'vercel'
  let repo = 'next.js'
  let sss = 'googd3332345565'

  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`)
  const data = await res.json()

  const props: RepoProps = {
    name: data['full_name'] || 'unknown',
    description: data['description'] || 'unknown',
    subscribers: data['subscribers_count'] || 'unknown',
    stars: data['stargazers_count'] || 'unknown',
    forks: data['forks'] || 'unknown',
  }

  return {
    props,
  }
}

export default Repo
