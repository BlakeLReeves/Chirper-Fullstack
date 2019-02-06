import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import $ from 'jquery';

export interface IAdminChirpsProps extends RouteComponentProps<{ id: string }> { }

export interface IAdminChirpsState {
    chirp: { id: string, user: string, text: null };
    newUser: string;
    newText: string;
}

class AdminChirps extends React.Component<IAdminChirpsProps, IAdminChirpsState> {
    constructor(props: IAdminChirpsProps) {
        super(props);
        this.state = {
            chirp: {
                id: null,
                user: null,
                text: null,
            },
            newUser: null,
            newText: null
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

    }

    async componentDidMount() {
        let id = this.props.match.params.id;
        try {
            let r = await fetch(`/api/chirps/${id}`);
            let chirp = await r.json();
            this.setState({ chirp });
        } catch (e) {
            console.log(e);
        }
    }

    async handleDelete() {
        let id = this.props.match.params.id;
        try {
            await fetch(`/api/chirps/${id}`, {
                method: "DELETE"
            });
            this.props.history.push('/');
        } catch (e) {
            console.log(e);
        }
    }

    async handleEdit() {
        let id = this.props.match.params.id;
        let data = {
            user: this.state.newUser,
            text: this.state.newText
        }
        console.log(data)
        try {
            await fetch(`/api/chirps/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            });
            this.props.history.replace('/');
        } catch (e) {
            console.log(e);
        }
    }

    render() {

        const { id, user, text} = this.state.chirp;

        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card m-2">
                        <div className="card-body">
                            <input value={this.state.newUser} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({newUser: e.target.value})} className="card-title d-block" id="editUserInput" placeholder={user + " Chirped!"} />
                            <input value={this.state.newText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({newText: e.target.value})} className="card-text d-block" id="editTextInput" placeholder={text} />
                            <div className="card-footer mt-2">{this.props.match.params.id}</div>
                            <div className="d-flex justify-content-between align-items-center">
                                <button onClick={this.handleEdit} className="btn btn-info mt-2">Save Changes</button>
                                <button onClick={this.handleDelete} className="btn btn-danger mt-2">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminChirps;