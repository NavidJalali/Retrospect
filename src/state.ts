export type State = Readonly<{
  username: string | undefined
  retroId: string | undefined
}>

export const initialState: State = {
  username: undefined,
  retroId: undefined
}
