import { Field, SmartContract, state, State, method } from 'snarkyjs'
export class Quiz extends SmartContract {
  constructor() {
    super(...arguments)
    this.num = State()
  }

  init() {
    super.init()
    this.num.set(Field(1))
  }

  update(answer) {
    const currentDayNumber = new Date().getUTCDay()
    const currentState = this.num.get()
    this.num.assertEquals(currentState) // precondition that links this.num.get() to the actual on-chain state
    answer.assertEquals(currentState.add(currentDayNumber))
    this.num.set(Field(answer))
  }
}