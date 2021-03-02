import React, { useState, useRef } from 'react';
import _ from 'lodash';

import { Button } from './Button';

export const Table = React.forwardRef((props, ref) => {

  const [keyword, setKeyword] = useState('');

  const type = (key) => {
    setKeyword(key);
    emmit(key);
  }

  const emmit = useRef(_.debounce(keyword => props.search(keyword), 500)).current;

  return (
    <div className="card card-success card-outline">
      <div className="card-header">
        <input type="text" className="form-control" value={keyword} placeholder="Search anything..." onChange={e => type(e.target.value)} />
      </div>
      <div className="card-body p-0 table-responsive">
        <table className="table text-gray">
          <thead>
            <tr>
              { props.cols && props.cols.map(column => <th key={column}>{column}</th>) }
            </tr>
          </thead>
          <tbody>
            {props.loader && <tr><td colSpan="100%" align="center"><i className="fas fa-clock"></i>...</td></tr>}
            {
              (!props.loader && props.data.data && props.data.data.length === 0) &&
              <tr><td colSpan="100%" align="center"><i className="fas fa-frown"></i> No record found...</td></tr>
            }
            {
              (!props.loader && props.data.data && props.data.data.length > 0) &&
              props.data.data.map(
                (each, i) => (
                  <tr key={`row-${i}`}>
                    {props.rows.map((row, j) => (j === (props.rows.length - 1))
                      ?
                      <td key={`cell-${j}`}>
                        <div className="d-flex">
                          <Button
                            block={false}
                            size="xs"
                            color="success"
                            method={() => props.edit(each)}
                            text={<i className="fas fa-pen"></i>}
                          ></Button>

                          <Button
                            block={false}
                            size="xs"
                            color="danger"
                            method={() => props.remove(each['id'])}
                            text={<i className="fas fa-trash"></i>}
                          ></Button>
                        </div>
                      </td>
                      :
                      <td key={`cell-${j}`}>
                        { (row == '#') ? (i+1) : each[row] }
                      </td>
                    )}
                  </tr>
                )
              )
            }
          </tbody>
        </table>
      </div>
      <div className="card-footer clearfix">
        <div className="card-tools">
          {(props.data.links) &&
            <ul className="pagination pagination-sm m-0 float-right">
              <li className="page-item">
                <button
                  className={`page-link ${(props.data.prev_page_url === null) && 'text-gray'}`}
                  onClick={() => (props.data.prev_page_url !== null) && props.paginate((props.data.current_page - 1), keyword)}
                >
                  <i className="fas fa-angle-left"></i>
                </button>
              </li>

              {
                (props.data.last_page > 10)
                ?
                <li className="page-item">
                  <span className="page-link text-primary">
                    Page { props.data.current_page } of { props.data.last_page } Pages
                  </span>
                </li>
                :
                props.data.links.map(
                  (link, index) => !isNaN(Number(link.label)) &&
                  <li className="page-item" key={`link-${index}`}>
                    <button
                      className={`page-link ${(props.data.current_page === Number(link.label)) ? 'text-primary font-weight-bold' : 'text-gray'}`}
                      onClick={() => props.paginate(Number(link.label), keyword)}
                    >
                      {link.label}
                    </button>
                  </li>
                )
              }

              <li className="page-item">
                <button
                  className={`page-link ${(props.data.next_page_url === null) && 'text-gray'}`}
                  onClick={() => (props.data.next_page_url !== null) && props.paginate((props.data.current_page + 1), keyword)}
                >
                  <i className="fas fa-angle-right"></i>
                </button>
              </li>
            </ul>
          }
        </div>
      </div>
    </div>
  );
});
