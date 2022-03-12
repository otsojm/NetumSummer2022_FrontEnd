import { useState, useEffect } from 'react';
import ReactTable from 'react-table-6';

import Person from './Person';
import AddPerson from './AddPerson'
import EditPerson from './EditPerson'
import DeletePerson from './DeletePerson'

import { Button } from '@mui/material';

import axios from 'axios';

import '../css/App.css';
import 'react-table-6/react-table.css';

export default function Table() {

    const [players, setPlayers] = useState();

    const columns = [
        {
            Header: 'Listing id',
            maxWidth: 250,
            accessor: 'listing_id'
        },
        {
            Header: 'Username',
            maxWidth: 300,
            accessor: 'username'
        },
        {
            Header: 'Last modified',
            maxWidth: 300,
            accessor: 'last_modified'
        },
        {
            filterable: false,
            sortable: false,
            maxWidth: 150,
            Cell: row => (<Button variant="contained" onClick={() => deletePlayer('http://localhost:3001/players/delete/' + row.original.listing_id)} class="btn btn-warning">Delete</Button>)
        }
    ]

    const fetchData = () => {

        axios.get(`http://localhost:3001/players`)
            .then(res => {
                const players = res.data;
                setPlayers(players);
            })
    }

    const deletePlayer = (value) => {

        axios.delete(value)
            .then(fetchData())
    }

    useEffect(() => {

        fetchData();
    }, []);

    return (
        <div className='App'>
            <h1 className='h1'>Player Database</h1>
            <div className='Table'>
                <AddPerson fetchData={fetchData} />
                <ReactTable filterable={true} defaultPageSize={10}
                    data={players} columns={columns} />
            </div>
        </div>
    );
}
