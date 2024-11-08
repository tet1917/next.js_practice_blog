import { getDetailArticle } from '@/blogAPI'
import Image from 'next/image'
import React from 'react'

const Article = async ({params} : {params:{id:string}}) => {
  const detailArticle = await getDetailArticle(params.id)
  console.log(detailArticle)
  return (
    <div className='max-w-3xl mx-auto mx-auto p-5'>
        <Image
        src={`https://picsum.photos/1200/300.jpg?${detailArticle.id}`}
        alt='テスト画像'
        width={1200}
        height={300}
        />
        <h1 className='text-4xl text-center mb-10 mt-10'>{detailArticle.title}</h1>
        <div className='text-lg leading-relaxed text-justify'>
            <p>{detailArticle.content}</p>
        </div>
    </div>
  )
}

export default Article
