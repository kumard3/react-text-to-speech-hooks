import React from 'react'
import useSpeechSynthesisApi from 'react-text-to-speech-hooks'

export default function App() {
  const {
    text,
    setText,
    isSpeaking,
    isPaused,
    isResumed,
    isEnded,
    speak,
    pause,
    resume,
    cancel
  } = useSpeechSynthesisApi()

  return (
    <div>
      <div>
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div>
        <button onClick={speak}>Speak</button>
        {isSpeaking ? 'Speaking' : ''}
        <button onClick={pause}>pause</button>
        {isPaused ? 'Paused' : ''}
        <button onClick={resume}>resume</button>
        {isResumed ? 'Resumed' : ''}
        <button onClick={cancel}>cancel</button>
        {isEnded ? 'Canceled' : ''}
      </div>
    </div>
  )
}
