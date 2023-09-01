type CartItem ={
    id: number,
    title:string,
    about:string,
    url:string,
    price:string,
    quantity?:number
}

type UserInfo = {
    createdAt: Date,
    displayName: string,
    email:string
}

type ChildrenType={
    children:ReactNode
}