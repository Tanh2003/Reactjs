import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUser } from '../../services/userService';
class UserManage extends Component {
    constructor(props){
        super(props);
        this.state={
            arrUsers:[]
        }
    }

    async componentDidMount() {
       let response =await getAllUser('ALL');
       if(response && response.errcode==0){
        this.setState({
            arrUsers:response.users

            });
       
       }
       
    }

    handleAddNewUser =()=>{
        alert("click me");

    }
/**Life cycle
 * Run component:
 * 1.run contrucstor-> init state
 * 2.did mouth(set state)
 * 3.render
 */

    render() {
        console.log('check render',this.state)
        let arrUsers=this.state.arrUsers;
        return (
            <div className="users-container">
                <div className='title text-center'>
                    Manage users Ntanh
                </div>
                <div>
                    <button className='btn-create btn btn-primary px-3'
                    onClick={()=>this.handleAddNewUser()}
                    ><i className="fas fa-user-plus"></i> Add new users</button>
                </div>
                <div className='users-table mt-4 mx-3'>
                <table id="customers">
                      <tr>
                        <th>Email</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Address</th>
                        <th>Actions</th>
                      </tr>
                     
                        {
                            arrUsers&&arrUsers.map((item,index)=>{
                                console.log('tanh check map',item,index)
                                return(
                                    <tr> 
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className='btn-edit'><i className="fas fa-pencil-alt"></i></button>
                                            <button className='btn-delete'><i className="fas fa-trash"></i></button>
                                        </td>
                                      

                                    </tr>
                                )

                            })
                               
                           

                        }
                       
                      

                </table>
              


                </div>
               








            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
