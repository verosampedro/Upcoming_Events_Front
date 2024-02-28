import type Event from "./Event"

export interface IUpdatedUser{
    email: string
    roles: object[]
    events: Event[]
}