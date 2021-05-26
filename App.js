import React, { useState, useRef, useEffect } from 'react';
import QuestLog from './QuestLog';
import {v4 as uuidv4} from 'uuid';
import './style.css'

const LOCAL_STORAGE_KEY = 'questApp.quests'

function App() {
  const [quests, setQuests] = useState([])
  const questNameRef = useRef()

  useEffect(() => {
    const storedQuests = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedQuests) setQuests(storedQuests)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(quests))
  }, [quests])

  function toggleQuest(id) {
    const newQuests = [...quests]
    const quest = newQuests.find(quest => quest.id === id)
    quest.complete = !quest.complete
    setQuests(newQuests)
  }

  function handleAddQuest(e) {
    const name = questNameRef.current.value
    if (name === '') return
    setQuests(prevQuests => {
      return [...prevQuests, { id: uuidv4(), name: name, complete: false}]
    })
    questNameRef.current.value = null
  }

  function handleClearQuests() {
    const newQuests = quests.filter(quest => !quest.complete)
    setQuests(newQuests)
  }

  return (
    <>
    <div id="container">
      <div id="textContainer">
      <h1>Quest Log</h1>
      <QuestLog quests={quests} toggleQuest={toggleQuest} />
      <input ref={questNameRef} type="text" />
      <div id="buttons">
        
      <button onClick={handleAddQuest} >Add Quest</button>
      <button onClick={handleClearQuests}>Clear Complete</button>
      
      <div>{quests.filter(quest => !quest.complete).length} left to do</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App;