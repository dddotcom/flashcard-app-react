import React, { createContext, useState, useEffect } from 'react';
export const TagalogContext = createContext();

export const TagalogContextProvider = (props) => {
    const [adjectives, setAdjectives] = useState([]);

    // simulate an async call, as if we are calling an API
    const stall = async(stallTime = 2000) => {
        await new Promise(resolve => setTimeout(resolve, stallTime));
    }

    const getAdjectives = async () => {
        await stall();
        let adj = await Promise.resolve([
            { type: 'adjective', tagalog: 'basa', english: 'wet', 'tagalogSentence': 'Basang aso. ', 'englishSentence': 'Wet dog.'},
            { type: 'adjective', tagalog: 'bago', english: 'new', 'tagalogSentence': 'Bagong damit.', 'englishSentence': 'New clothing.'},
            { type: 'adjective', tagalog: 'bukas', english: 'open', 'tagalogSentence': 'Bukas na tindihan ', 'englishSentence': 'Open store'},
            { type: 'adjective', tagalog: 'galit', english: 'angry', 'tagalogSentence': 'Galit na nanay. ', 'englishSentence': 'Angry mom.'},
            { type: 'adjective', tagalog: 'gutom', english: 'hungry', 'tagalogSentence': 'Gutom na mga bata. ', 'englishSentence': 'Hungry children.'},
            { type: 'adjective', tagalog: 'lasing', english: 'drunk', 'tagalogSentence': 'Lasing na tito. ', 'englishSentence': 'Drunk tito.'},
        ])
        setAdjectives(adj);
    }

    useEffect(() => {
        getAdjectives();
    }, [])

    return (
        <TagalogContext.Provider value={{adjectives}}>
            {props.children}
        </TagalogContext.Provider>
    )

}

