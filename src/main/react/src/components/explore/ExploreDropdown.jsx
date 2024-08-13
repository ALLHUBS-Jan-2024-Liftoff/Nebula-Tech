import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './ExploreDropdown.css'

function ExploreDropdown() {
    return (
        <div className="button-group-container">
            <ButtonGroup>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" rounded={false}>
                        Dropdown 1
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" rounded={false}>
                        Dropdown 2
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        Dropdown 3
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </ButtonGroup>
        </div>
            );
            }

            export default ExploreDropdown;