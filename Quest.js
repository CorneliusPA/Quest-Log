import React from 'react'

export default function Quest({ quest, toggleQuest }) {
  function handleQuestClick() {
    toggleQuest(quest.id)
  }
  
  return (
    <div>
      <label>
        <input type="checkbox" checked={quest.complete} onChange={handleQuestClick} />
        {quest.name}
      </label>
    </div>
  )
}