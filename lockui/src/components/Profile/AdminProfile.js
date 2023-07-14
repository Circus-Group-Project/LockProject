import React, { useState } from 'react';
import './Profile.css';
import { BsFilePerson } from 'react-icons/bs';
import { MdOutlineAddBox } from 'react-icons/md';
import { AiFillCloseSquare } from 'react-icons/ai';

const Profile = () => {
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showAssignDialog, setShowAssignDialog] = useState(false);

  const openAddDialog = () => {
    setShowAddDialog(true);
  };

  const openAssignDialog = () => {
    setShowAssignDialog(true);
  };

  const closeDialogs = () => {
    setShowAddDialog(false);
    setShowAssignDialog(false);
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
              <p>This is the admin account that will be able to create devices</p>
            </div>
          </div>
        </div>
        <div className='DevicesContainer'>
          <div className='DeviceContainerContent'>
            <div className='DeviceContainerHeader'>
              <div className='headingDevice'>
                <h3>Existing Devices</h3>
              </div>
            </div>
            <div className='existingDeviceContainer'>
              <table className='existingPasswordsTable'>
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Devices Owned</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Username 1</td>
                    <td>Device 1, Device 2, Device 3</td>
                  </tr>
                  <tr>
                    <td>Username 2</td>
                    <td>Device 4, Device 5</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='addContainers'>
              <div className='NewPassword'>
                <p> Add New Device </p>
                <MdOutlineAddBox className='addBtn' onClick={openAddDialog} />
              </div>
              <div className='NewLock'>
                <p> Assign Device </p>
                <MdOutlineAddBox className='addBtn' onClick={openAssignDialog} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {showAddDialog && (
        <div className='dialogOverlay'>
          <div className='dialogContainer'>
            <AiFillCloseSquare className='closeIcon' onClick={closeDialogs} />
            <h3>Add New Device</h3>
            <div className='dialogContent'>
              <input type='text' placeholder='Enter device name' />
              <div className='buttonContainer'>
                <button className='dialogButton'>Yes</button>
                <button className='dialogButton'>No</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showAssignDialog && (
        <div className='dialogOverlay'>
          <div className='dialogContainer'>
            <AiFillCloseSquare className='closeIcon' onClick={closeDialogs} />
            <h3>Assign Device</h3>
            <div className='dialogContent'>
              <div className='dropdownContainer'>
                <select id='userDropdown'>
                  <option value='user1'>User 1</option>
                  <option value='user2'>User 2</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className='dropdownContainer'>
                <select id='deviceDropdown'>
                  <option value='device1'>Device 1</option>
                  <option value='device2'>Device 2</option>
                  {/* Add more options as needed */}
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
    </div>
  );
};

export default Profile;
