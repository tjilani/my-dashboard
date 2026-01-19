import React from 'react'

const Book = ({work}: {work: {id: string, title: string, author: string}}) => {
  return (
    <div key={work.id}>
    <h2>{work.title}</h2>
</div>
  )
}

export default Book