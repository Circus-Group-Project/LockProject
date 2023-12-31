import React, { useState } from 'react';
import './Profile.css';
import { BsFilePerson } from 'react-icons/bs';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteForever, MdOutlineAddBox } from 'react-icons/md';
import { AiFillCloseSquare } from 'react-icons/ai';

const Profile = () => {
  const [showAddPasswordDialog, setShowAddPasswordDialog] = useState(false);
  const [showAddLockDialog, setShowAddLockDialog] = useState(false);
  const [showEditPasswordDialog, setShowEditPasswordDialog] = useState(false);

  const openAddPasswordDialog = () => {
    setShowAddPasswordDialog(true);
  };

  const openAddLockDialog = () => {
    setShowAddLockDialog(true);
  };

  const openEditPasswordDialog = () => {
    setShowEditPasswordDialog(true);
  };

  const closeDialogs = () => {
    setShowAddPasswordDialog(false);
    setShowAddLockDialog(false);
    setShowEditPasswordDialog(false);
  };

  return (
    <div className='profile'>
      <div className='profileContainer'>
        <div className='profileContainerContent'>
          <div className='profilePicture'>
            <BsFilePerson className='icon' />
          </div>
          <div className='profileStatus'>
            <p className='welcome'>
              Welcome <span className='userName'>UserName</span>!
            </p>
            <div className='stats'>
              <p className='pDesc'>
                <span className='Desc'>Description</span>
              </p>
              {/* Admin account will have a different description: This is the admin account that will be able to create devices */}
              <p>
                This User has <span>20</span> devices associated with his account
              </p>
            </div>
          </div>
        </div>
        <div className='DevicesContainer'>
          <div className='DeviceContainerContent'>
            <div className='DeviceContainerHeader'>
              <div className='headingDevice'>
                <h3>Existing Passwords</h3>
              </div>
              <div className='dropdownDeviceSelection'>
                <select>
                  <option value='option1'>Device 1</option>
                  <option value='option2'>Device 2</option>
                  <option value='option3'>Device 3</option>
                </select>
              </div>
            </div>
            <div className='existingDeviceContainer'>
              <table className='existingPasswordsTable'>
                <thead>
                  <tr>
                    <th>Password</th>
                    <th>Devices</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Password 1</td>
                    <td>Device 1, Device 2, Device 3</td>
                    <td>
                      <CiEdit className='editIcon' onClick={openEditPasswordDialog} />
                      <MdDeleteForever className='deleteIcon' />
                    </td>
                  </tr>
                  <tr>
                    <td>Password 2</td>
                    <td>Device 4, Device 5</td>
                    <td>
                      <CiEdit className='editIcon' onClick={openEditPasswordDialog} />
                      <MdDeleteForever className='deleteIcon' />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='addContainers'>
              <div className='NewPassword'>
                <p> Add New Password </p>
                <MdOutlineAddBox className='addBtn' onClick={openAddPasswordDialog} />
              </div>
              <div className='NewLock'>
                <p> Add New Lock </p>
                <MdOutlineAddBox className='addBtn' onClick={openAddLockDialog} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {showAddPasswordDialog && (
        <div className='dialogOverlay'>
          <div className='dialogContainer'>
            <AiFillCloseSquare className='closeIcon' onClick={closeDialogs} />
            <h3>Add New Password</h3>
            <div className='dialogContent'>
              <div className='dropdownContainer'>
                <select id='userDropdown'>
                  <option value='user1'>Device 1</option>
                  <option value='user2'>Device 2</option>
                </select>
              </div>
              <input type='text' placeholder='Enter device name' />
              <div className='buttonContainer'>
                <button className='dialogButton'>Yes</button>
                <button className='dialogButton'>No</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showAddLockDialog && (
        <div className='dialogOverlay'>
          <div className='dialogContainer'>
            <AiFillCloseSquare className='closeIcon' onClick={closeDialogs} />
            <h3>Add New Lock</h3>
            <div className='dialogContent'>
              <div className='dropdownContainer'>
                <select id='userDropdown'>
                  <option value='user1'>User 1</option>
                  <option value='user2'>User 2</option>
                </select>
              </div>
              <div className='buttonContainer'>
                <button className='dialogButton'>Yes</button>
                <button className='dialogButton'>No</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showEditPasswordDialog && (
        <div className='dialogOverlay'>
          <div className='dialogContainer'>
            <AiFillCloseSquare className='closeIcon' onClick={closeDialogs} />
            <h3>Edit Password</h3>
            <div className='dialogContent'>
              <div className='dropdownContainer'>
                <select id='userDropdown'>
                  <option value='user1'>Device 1</option>
                  <option value='user2'>Device 2</option>
                  <option value='user2'>Device 3</option>
                </select>
              </div>
              <input type='text' placeholder='Enter new password' />
              <div className='buttonContainer'>
                <button className='dialogButton'>Yes</button>
                <button className='dialogButton'>No</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
