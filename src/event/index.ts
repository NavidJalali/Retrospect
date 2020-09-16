export type EventKind = 'Retro Created' | 'Participant Joined'

export interface Event {
  timestamp: number

  kind: EventKind

  retroCreatedParams?: {
    organizer: string
  }
  participantJoinedParams?: {
    participantName: string
  }
}

export const generateRetroCreatedEvent = (organizerName: string): Event => ({
  timestamp: Date.now(),
  kind: 'Retro Created',
  retroCreatedParams: {
    organizer: organizerName
  }
})

export const generateParticipantJoinedEvent = (name: string): Event => ({
  timestamp: Date.now(),
  kind: 'Participant Joined',
  participantJoinedParams: {
    participantName: name
  }
})
