'use client'

import { useState, useEffect } from 'react'
import productsData from './sample/dummy_products.json'
import Link from 'next/link'

type ProductsData = {
  id: number
  name: string
  price: number
  description: string
}

export default function Page() {
  const [data, setData] = useState<Array<ProductsData>>([])

  useEffect(() => {
    setData(productsData)
  }, [])

  // 新規登録処理、新規登録行の表示状態を保持
  const [shownNewRow, setShownNewRow] = useState(false)
  const handleShowNewRow = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setShownNewRow(true)
  }
  const handleAdd = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setShownNewRow(false)
  }

  return (
    <>
      <h2>商品一覧</h2>
      <button onClick={ handleShowNewRow }>商品を追加する</button>
      <table>
        <thead>
          <tr>
            <th>商品ID</th>
            <th>商品名</th>
            <th>単価</th>
            <th>説明</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {shownNewRow ? (
            <tr>
              <td></td>
              <td><input type="text" /></td>
              <td><input type="number" /></td>
              <td><input type="text" /></td>
              <td></td>
              <td><button onClick={ handleAdd }>登録する</button></td>
            </tr>
          ) : ''}
          {data.map((data: any) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.price}</td>
              <td>{data.description}</td>
              <td><Link href={`/inventory/products/${data.id}`}>在庫処理</Link></td>
              <td><button>更新・削除</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}