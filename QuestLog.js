import React from 'react'
import Quest from './Quest'

export default function QuestLog({ quests, toggleQuest }) {
  return (
    quests.map(quest => {
      return <Quest key={quest.id} toggleQuest={toggleQuest} quest={quest} />
    })
  )
}