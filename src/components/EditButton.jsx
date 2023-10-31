import React, { useState } from 'react';

export default function EditButton() {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleSave = () => {
        // Logique de sauvegarde des données ici
        setShowForm(false);
    };

    const handleCancel = () => {
        // Logique d'annulation ici
        setShowForm(false);
    };

    return (
        <div>
            {showForm ? (
                <div className='editButton_container'>
                    <form className='editForm'>
                        <h1 className='editFormTitle'>Edit user info</h1>
                        <div className="editFormItems">
                            <label htmlFor="userName">User Name : </label>
                            <input type="text" id='userName' />
                        </div>
                        <div className="editionItems">
                            <label htmlFor="firstName">First Name : </label>
                            <input type="text" id='firstName' placeholder="firstName" disabled />
                        </div>
                        <div className="editItems">
                            <label htmlFor="lastName">Last Name : </label>
                            <input type="text" id='lastName' placeholder="lastName" disabled />
                        </div>
                        <div className="editSaveButton">
                            <button type='submit' className='editFormButton' onClick={handleSave}>
                                Save
                            </button>
                            <button className='editFormButton' onClick={handleCancel}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <button className="edit-button" onClick={toggleForm}>
                    Edit Name
                </button>
            )}
        </div>
    );
}