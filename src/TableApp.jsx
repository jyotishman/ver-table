import React from 'react';


class TableApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderData : this.props.options,
            updateData: ""
        }
    }
    add(data) {
        let newState = {...this.state};
        newState["renderData"].data.push(...data);
        this.setState(newState);
    }
    update(index) {
        let newState = {...this.state};
        newState["updateData"] = this.state.renderData.data[index];
        this.setState(newState);
    }
    delete(index) {
        let newState = {...this.state};
        newState["renderData"].data.splice(index, 1);
        this.setState(newState);
    }
    handleChange(pindex, iindex, value, key) {
        let newState = {...this.state};
        newState.renderData.data[pindex].colData[iindex] = value;
        this.setState(newState)
    }
    toggleCheckbox(pindex, iindex, value, key) {
        let newState = {...this.state};
        newState.renderData.data[pindex].colData[iindex] = !this.state.renderData.data[pindex].colData[iindex];
        this.setState(newState)
    }

    render() {
        console.log(this.state)
        return(
            <div>
            <table className="employeeTable">
                <thead>
                    <tr>
                        <th>
                            Employee Name
                        </th>
                        <th>
                            Emp Address
                        </th>
                        <th>
                            IsEmpVerified
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.renderData.data && this.state.renderData.data.map((data, Pindex) => {
                            return(
                                <tr key={Pindex}>
                                    {
                                        data.colData.map((item, Iindex) => {
                                            return(
                                                <td key={Iindex}>
                                                    {
                                                        this.state.renderData.colDefs[Iindex].type === "text" ? item : "" 
                                                    }{
                                                        this.state.renderData.colDefs[Iindex].type === "input" ? (<input value={item} onChange={({ target }) => this.handleChange(Pindex, Iindex, target.value, item)} />): ""
                                                    }
                                                    {   this.state.renderData.colDefs[Iindex].type === "checkbox" ? (<input onChange={({ target }) => this.toggleCheckbox(Pindex, Iindex, target.value, item)}  checked={item} type={"checkbox"}/>): ""
                                                    }
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                    <tr>

                    </tr>
                </tbody>
            </table>
            {
                this.state.updateData ? (
                    <div className="edit-wrap">
                        <h3>Update </h3>
                        <form>
                            <div className="group">
                                <label >Employee Name</label>
                                <input type="text" value={this.state.updateData.colData && this.state.updateData.colData.length>0 && this.state.updateData.colData[0]}/>
                            </div>
                            <div className="group">
                                <label >Employee Address</label>
                                <input type="text" value={this.state.updateData.colData && this.state.updateData.colData.length>0 && this.state.updateData.colData[1]} />
                            </div>
                            <div className="group">
                                <label>IsAddressVerified
                                    <input type="checkbox" checked={this.state.updateData.colData && this.state.updateData.colData.length>0 && this.state.updateData.colData[2]} />
                                </label>
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>): ""
            }
        </div>)
    }
}

export default TableApp;