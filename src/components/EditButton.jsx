import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateUserProfile } from '../actions/EdtiNameActions'
import { fetchUserProfile } from '../actions/profileActions';
import '../Styles/editButton.css'


function EditButton({ userProfile, token, fetchUserProfile, updateUserProfile }) {
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

    const handleSave = async (e) => {
        e.preventDefault(); 
        await updateUserProfile(userData, token);
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
                            <input type="text" id='userName' value={userData.userName} onChange={(e) => setUserData({ ...userData, userName: e.target.value })}  />
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

const mapDispatchToProps = (dispatch) => {
    return {
        updateUserProfile: (userData, token) => dispatch(updateUserProfile(userData, token)),
        fetchUserProfile: (token) => dispatch(fetchUserProfile(token))
    };
};

export default connect(null, mapDispatchToProps)(EditButton);