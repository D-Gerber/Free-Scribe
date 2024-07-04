import React, { useState } from 'react'
import Transcription from './Transcription'
import Translation from './Translation'

export default function Information(props) {
    const { output } = props
    console.log(output)
    const [tab, setTab] = useState('transcription')

    return (
        <main className='flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 justify-center pb-20 max-w-prose w-full mx-auto'>
            <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl whitespace-nowrap'>Your <span className='text-red-400 bold'>Transcription</span></h1>
            <div className='grid grid-cols-2 mx-auto bg-white shadow rounded-full overflow-hidden items-center'>
                <button onClick={() => setTab('transcription')} className={'px-4 duration-200 py-1 ' + (tab === 'transcription' ? ' bg-red-300 text-white' : ' text-red-400 hover:text-red-600')} >Transcription</button>
                <button onClick={() => setTab('translation')} className={'px-4 duration-200 py-1 ' + (tab === 'translation' ? ' bg-red-300 text-white' : ' text-red-400 hover:text-red-600')} >Translation</button>
            </div>
            {tab === 'transcription' ? (
                <Transcription {...props} />
            ) : (
                <Translation {...props} />
            )}
        </main>
    )
}