import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-6';
import Button from '@mui/material/Button'

import Person from './Person';
import AddPerson from './AddPerson'
import EditPerson from './EditPerson'

import '../css/App.css';
import 'react-table-6/react-table.css';

export default function Table() {

    const [persons, setPersons] = useState<Person[]>([]);

    let personsArray: { person_id: number; first_name: string; last_name: string; age: number }[] = [];

    const columns = [
        {
            Header: 'Person id',
            maxWidth: 100,
            accessor: 'person_id'
        },
        {
            Header: 'First name',
            maxWidth: 300,
            accessor: 'first_name'
        },
        {
            Header: 'Last name',
            maxWidth: 300,
            accessor: 'last_name'
        },
        {
            Header: 'Age',
            maxWidth: 100,
            accessor: 'age'
        },
        {
            filterable: false,
            sortable: false,
            maxWidth: 100,
            Cell: (row: { original: { person_id: string; }; }) => (<Button variant="contained" color="error" onClick={() => deletePerson("http://localhost:5000/persons/" + row.original.person_id)}>Delete</Button>)
        },
        {
            filterable: false,
            sortable: false,
            maxWidth: 100,
            Cell: (row: { original: any; }) => (<EditPerson person={row.original} fetchData={fetchData}/>)
        }
    ]

    async function fetchData() {

        const response = await fetch('http://localhost:5000/persons/');
        const data = await response.json();

        data.forEach((obj: { person_id: number; first_name: string; last_name: string; age: number }) => {

            personsArray.push(new Person(obj.person_id, obj.first_name, obj.last_name, obj.age));
        });

        setPersons(personsArray);
    }

    useEffect(() => {

        fetchData();
    }, []);

    const deletePerson = (value: any) => {

        if (window.confirm("Do you really want to delete this person?")) {

            fetch(value, { method: 'DELETE' })
                .then(response => fetchData())
                .catch(error => console.error(error))
        }
    }

    return (
        <div className='App'>
            <h1 className='h1'>Person Database</h1>
            <div className='Table'>
                <AddPerson fetchData={fetchData}/>
                <ReactTable filterable={true} defaultPageSize={10}
                    data={persons} columns={columns} />
            </div>
        </div>
    );
}
