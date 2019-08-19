const maybeUser = {
  age: 26,
  name: 'Taro',
  gender: 'male'
}

function registerUser(user: User) { }

registerUser(maybeUser)
registerUser({
  ...{
    age: 26,
    name: 'Taro',
    gender: 'male'
  }
})

type State = {
  readonly id: number
  name: String
}

const state: State = {
  id: 1,
  name: 'Taro'
}

const frozenState = Object.freeze(state)

frozenState.name = 'Hanako'
frozenState.id = 2

console.log(state.name)

const defaultTheme = {
  backgroundColor: 'orange' as 'orange',
  borderColor: 'red' as 'red'
}

defaultTheme.backgroundColor = 'blue'

const empty = {} as { value: 'value' }

function toNumber(value: string): any {
  return value
}

const fiction: number = toNumber('1000')
fiction.toFixed()

type Question = 'exercise_habits' | 'time_of_sleeping'

type Answer = 'mighty' | 'lot' | 'few' | 'entirely'


const tuple1 = [false, 1, '2'] as [false, 1, '2']

const tuple2 = [false, 1, '2'] as const

const a = 'a'
let b = a

const A = 'A' as const
let B = A


function greet(name?: string) {
  console.log(`Hello ${name!.toUpperCase()}`)
}

greet()

function reset(value: number | string | boolean) {
  const v0 = value
  if (typeof value === 'number') {
    const v1 = value
    return 0
  }
  const v2 = value
  if (typeof value === 'string') {
    cosnt v3 = value
    return ''
  }

  const v4 = value
  return false
}
console.log(reset(1))
console.log(reset('1'))
console.log(reset(true))

type User = { gender: string }


type UserA = { gender: 'male'; name: string }
type UserB = { gender: 'female'; age: number }
type UserC = { gender: 'other'; graduate: string }
