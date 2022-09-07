import MUIDataTable from "mui-datatables";
import users from '../Dates/rtaTime.json';
import { IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import "../styles/tableUsers.scss"

const columnas = [
    {
        name: "solid",
        label: "Sol ID"
    },
    {
        name: "name",
        label: "First name"
    },
    {
        name: "Lname",
        label: "Last name"
    },
    {
        name: "shour",
        label: "Start Hour"
    },
    {
        name: "ehour",
        label: "End Hour"
    },
    {
        name: "state",
        label: "State",
    },
    {
        name: "tstate",
        label: "Time In State"
    }
]

const Option = {
    download: false,
    filterType: "multiselect",
    print: false,
    searchPlaceholder: "Search..",
    selectableRows: 'multiple',
    selectableRowsOnClick: true,
    selectableRowsHideCheckboxes: true,
    responsive: "standard",
    fixedHeader: false,
    setRowProps: (row, dataIndex, rowIndex) => {
        console.log(row[5]);

        if (row[5] === "available") {
            return {
                style: { backgroundColor: "red" }
            }
        }
    },
    customToolbar: () => {
        return (
            <CustomToolbar />
        )
    }
}

const defaultToolStyle = {
    IconButton: {

    },
};

const CustomToolbar = () => {
    const handleclick = () => {
        modal();
    }

    return (
        <React.Fragment>
            <Tooltip title={"Custom Icon"}>
                <IconButton className={defaultToolStyle.IconButton} onClick={handleclick}>
                    <AddIcon />
                </IconButton>
            </Tooltip>
        </React.Fragment>
    )
}

function close() {
    var modal = document.getElementById("Mymodal");
    var body = document.getElementsByTagName("body")[0];
    modal.style.display = "none";
    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";
}
function modal() {
    var modal = document.getElementById("Mymodal");
    var body = document.getElementsByTagName("body")[0];
    modal.style.display = "block";
    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";
}
export const DateTableE = () => {

    return (
        <>
            <div id="Mymodal" className="modalcont">
                <div id="modal-cont">
                    <div id="contm">
                        <div className="sideRi">
                            <button className="buttonClose" onClick={close} >hola</button>
                        </div>
                        <div className="sideLe">
                            <form action="">
                                <label for="">SoLvoID</label>
                                <input type="text" name="SolID" id="SolID" class="inputs" />
                                <label for="">First Name</label>
                                <input type="text" name="firstNAme" id="firstName" class="inputs" />
                                <label for="">Last Name</label>
                                <input type="text" name="lastName" id="lastName" class="inputs" />
                                <label for="">Email</label>
                                <input type="email" name="corpEmail" id="CorpEmail" class="inputs" />
                                <label for="">Perfil</label>
                                <select name="Perfil" id="perfil" class="inputs">
                                    <option value="">-</option>
                                    <option value="">Interpreter</option>
                                    <option value="">Supervisor</option>
                                    <option value="">Team Leader</option>
                                    <option value="">Administrador</option>
                                </select>

                                <label for="">Supervisor</label>
                                <select name="supervisor" id="supervisor" class="inputs">
                                    <option value="">N/A</option>
                                    <option value="">Opcion1</option>
                                    <option value="">Opcion2</option>
                                    <option value="">Opcion3</option>
                                </select>
                                <label for="">Account</label>
                                <select name="account" id="account" class="inputs">
                                    <option value="-">-</option>
                                    <option value="">Cyracom</option>
                                    <option value="">Urgently</option>
                                    <option value="">Emed</option>
                                </select>
                                <a href="#company" class="inputs">do you want add another account?</a>
                                <label for="">Locaction</label>
                                <select name="location" id="location" class="inputs">
                                    <option value="">-</option>
                                    <option value="">Opcion A</option>
                                    <option value="">Opcion B</option>
                                </select>
                                <input type="button" value="ADD" name="add" id="add" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <MUIDataTable
                title={"Export"}
                columns={columnas}
                data={users}
                options={Option} />
        </>
    )
}

