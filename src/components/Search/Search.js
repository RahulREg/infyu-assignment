import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton, Button } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';

const Search = () => {
    return (
        <div className="search">
            <div>
                <Dropdown>
                    <Dropdown.Toggle className="green" variant="success" id="dropdown-basic">
                        <GiHamburgerMenu />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        All Departments &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="green">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="bar">
                <DropdownButton id="dropdown-basic-button" title="Dropdown button &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                </DropdownButton>
                <input className="in" type="text" placeholder="Search here" />
                <Button className="green">
                    Search
                </Button>
            </div>
        </div>
    )
}

export default Search
