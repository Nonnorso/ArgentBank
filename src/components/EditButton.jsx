import React, { useState, useEffect } from 'react';

export default function EditButton({ userProfile, token }) {
    const [showForm, setShowForm] = useState(false);
    const [userData, setUserData] = useState({
        userName: '',
        firstName: '',
        lastName: ''
    });

    useEffect(() => {
        if (userProfile) {
            setUserData({
                userName: userProfile.userName,
                firstName: userProfile.firstName,
                lastName: userProfile.lastName
            });
        }
    }, [userProfile]);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleSave = () => {
        setShowForm(false);
    };

    const handleCancel = () => {
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
                            <input type="text" id='userName' value={userData.userName} onChange={(e) => setUserData({ ...userData, userName: e.target.value })}  />
                        </div>
                        <div className="editionItems">
                            <label htmlFor="firstName">First Name : </label>
                            <input type="text" id='firstName' placeholder="firstName" value={userData.firstName} onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} disabled />
                        </div>
                        <div className="editItems">
                            <label htmlFor="lastName">Last Name : </label>
                            <input type="text" id='lastName' placeholder="lastName" value={userData.lastName} onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} disabled />
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