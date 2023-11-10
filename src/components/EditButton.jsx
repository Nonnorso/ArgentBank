import React, { useState, useEffect } from 'react';
import '../Styles/editButton.css'


function EditButton({ userProfile, token, fetchUserProfile, onUpdateUserProfile }) {
    const [showForm, setShowForm] = useState(false);
    const [userData, setUserData] = useState({
        userName: '',
        firstName: '',
        lastName: ''
    });

    const [error, setError] = useState('');

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

    const handleSave = async (e) => {
        e.preventDefault(); 

        if (userData.userName === '' || userData.userName.length < 3) {
            setError("Le nom d'utilisateur doit comporter au moins 3 caractères.");
            return;
        }

        const firstChar = userData.userName.charAt(0);

        if (firstChar !== firstChar.toUpperCase()) {
            setError("Le nom d'utilisateur doit commencer par une majuscule.");
            return;
        }   

        setError('');

        await onUpdateUserProfile(userData, token);
        setShowForm(false);

        if (token && fetchUserProfile) {
            fetchUserProfile(token);
        }
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setShowForm(false);
        setUserData({
            userName: userProfile.userName,
            firstName: userProfile.firstName,
            lastName: userProfile.lastName
        });
    };

    return (
        <div>
            {showForm ? (
                <div className='editForm_container'>
                    <form className='editForm'>
                        <h2>Edit user info</h2>
                        <div>
                            <label htmlFor="userName">User Name : </label>
                            <input 
                            type="text" 
                            id='userName' 
                            value={userData.userName} 
                            onChange={(e) => 
                            setUserData({ ...userData, userName: e.target.value })} />
                            {error && <p className="error-message">{error}</p>}
                        </div>
                        <div>
                            <label htmlFor="firstName">First Name : </label>
                            <input type="text" id='firstName' placeholder="firstName" value={userData.firstName} onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} disabled />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name : </label>
                            <input type="text" id='lastName' placeholder="lastName" value={userData.lastName} onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} disabled />
                        </div>
                        <div className='editFormButton_container'>
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

export default EditButton;