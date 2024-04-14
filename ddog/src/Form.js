import React, { useState } from 'react';
import { ddog } from './App';

export function Form({ setTableData }) {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [message, setMessage] = useState('');
    const [query, setQuery] = useState('');

    const submit = async (event) => {
        event.preventDefault();

        // ERROR: unable fetch data from api because of cors error
        await ddog.create_monitor({ name, type, query, message });

        ddog.get_monitor_list()
            .then(data => setTableData(data));

        setName('');
        setType('');
        setQuery('');
        setMessage('');
    };

    return (
        <>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <input className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input className="form-control" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input className="form-control" placeholder="Query" value={query} onChange={(e) => setQuery(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input className="form-control" placeholder="type" value={type} onChange={(e) => setType(e.target.value)} />
                </div>
                <div className='mb-3 text-end'>
                    <button type='submit' className='btn btn-primary'>Create</button>
                </div>
            </form>
        </>
    )
}