import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Cereals",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Legumes",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Fruits",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Drinks",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Conduments",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Breakfast",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "fast foods",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "flour",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Baby Toys",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Groceries",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Books",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
