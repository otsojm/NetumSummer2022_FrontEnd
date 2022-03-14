import Button from '@mui/material/Button';

import Api from '../services/Api';

export default function DeletePerson(props: { person_id: any; insertDataToTable: () => void; }) {

    const deletePerson = async () => {
        if (window.confirm("Do you really want to delete this person?")) {
            await Api.deleteData(props.person_id.person_id);
        }
        props.insertDataToTable();
    }

    return (
        <div>
            <Button variant="contained" color="error" onClick={deletePerson}>Delete</Button>
        </div>
    )
}
