## api graphQL

    cd api
    npm install
    npm start

## react
    
    cd react
    npm install
    npm run dev

## vanilla 

    cd vanilla 
    open live server

## Querys
- get all product 
```js
query{
    allProducts{
        id,
        name
        image_url
        price_in_cents
        description
    }
}
```

- get product router

```js
query{
  Product(id: "id"){
    name
    description
    image_url
    created_at
    price_in_cents
    category
  }
}
```