interface ITransaction extends IBaseInterface {
  amount: number
  category_id: number
  tag_id: number[]
  type: TypeTransaction
  date: Date
}

type TypeTransaction = "entry" | "exit"