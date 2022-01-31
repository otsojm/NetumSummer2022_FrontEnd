import Button from '@mui/material/Button';

export default function DeletePerson(props: { person_id: any; fetchData: () => any; }) {

    const deletePerson = () => {

        if (window.confirm("Do you really want to delete this person?")) {

            fetch('https://json.netumsummer.awsproject.link/persons/' + props.person_id.person_id, { method: 'DELETE' })
                .then(response => props.fetchData())
                .catch(error => console.error(error))
        }
    }

    return (
        <div>
            <Button variant="contained" color="error" onClick={deletePerson}>Delete</Button>
        </div>
    )
}
