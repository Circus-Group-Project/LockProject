import React from 'react'
import './Profile.css'
import { BsFilePerson } from 'react-icons/bs'
import { CiEdit } from 'react-icons/ci'
import { MdDeleteForever, MdOutlineAddBox } from 'react-icons/md'

const Profile = () => {
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
              <p>This User has <span>20</span> devices associated with his account</p>
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
                        <CiEdit className='editIcon' />
                        <MdDeleteForever className='deleteIcon' />
                    </td>
                  </tr>
                  <tr>
                    <td>Password 2</td>
                    <td>Device 4, Device 5</td>
                    <td>
                        <CiEdit className='editIcon' />
                        <MdDeleteForever className='deleteIcon' />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='addContainers'>
                <div className='NewPassword'>
                  <p> Add New Password </p>
                  <MdOutlineAddBox className='addBtn'></MdOutlineAddBox>
                </div>
                <div className='NewLock'>
                    <p> Add New Lock </p>
                    <MdOutlineAddBox className='addBtn'></MdOutlineAddBox>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
