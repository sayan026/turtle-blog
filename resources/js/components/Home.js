import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { axios } from "../store/service";
import { Table } from "./Table";
import * as userAct from "../store/actions/user";

const Home = props => {
  const user = useSelector(state => state.auth.user);

  if (user === null) {
    return <Redirect to="/" />
  }

  const signOut = () => {
    return axios.get("/api/signout")
    .then(res => {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
      alert("Signout successful");
      location.replace("/");
    })
    .catch(err => {
      alert(err.response.data.message);
    });
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userAct.fetchUsers());
  }, []);

  const loading = useSelector(state => state.user.loading);
  const cols = useSelector(state => state.user.cols);
  const rows = useSelector(state => state.user.rows);
  const userList = useSelector(state => state.user.list);
  const editUser = data => {
    console.log(data);
  }

  const removeUser = data => {
    console.log(data);
  }

  return (
    <div className="p-5">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Welcome, { user.name }</a>
          <button className="btn btn-outline-primary" onClick={() => signOut()}>Logout</button>
        </div>
      </nav>

      <div className="card mb-3 mt-3">
        <div className="row g-0">
          <div className="col-md-4 bg-primary p-5">
            <h3 className="text-white">1. Datatable Component</h3>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <Table
                loader={loading}
                cols={cols}
                rows={rows}
                data={userList}
                edit={data => editUser(data)}
                remove={id => removeUser(id)}
                search={keyword => dispatch(userAct.fetchUsers(1, keyword))}
                paginate={(page, keyword) => dispatch(userAct.fetchUsers(page, keyword))}
              ></Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
