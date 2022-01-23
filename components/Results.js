import React from 'react';
import Card from './Card';

export default function Results({results}) {
    return <div className='result'>
        {
            results.map(item => (
                <Card 
                    key={item.id}
                    result={item}
                />
            ))
        }
    </div>;
}
