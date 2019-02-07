import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export interface IPostChirpProps extends RouteComponentProps { }

export interface IPostChirpState {
    selectedUserId: string;
    chirp: string;
    users: { id: number, name: string, email: string, passwor: string, _created: Date }[];
}

class PostChirp extends React.Component<IPostChirpProps, IPostChirpState> {
    constructor(props: IPostChirpProps) {
        super(props);
        this.state = {
            users: [],
            selectedUserId: null,
            chirp: ''
        };

        this.handleSelectUserChange = this.handleSelectUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    async componentDidMount() {
        try {
            let r = await fetch('/api/users');
            let users = await r.json();
            this.setState({ users });
        } catch (e) {
            console.log(e);
        }
    }


    async handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        let chirp = {
            userid: this.state.selectedUserId,
            chirp: this.state.chirp
        };
        try {
            await fetch('/api/chirps', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(chirp)
            })
            this.props.history.replace('/');
        } catch (e) {
            console.log(e);
        }
    }

    renderUsers() {
        return this.state.users.map(user => {
            return <option value={user.id}>{user.name}</option>
        })
    }

    handleSelectUserChange(e: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({ selectedUserId: e.target.value })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={this.handleSubmit} className="form-group p-3 my-4 shadow-lg bg-white border border-primary rounded">
                        <label>User:</label>
                        <select
                            value={this.state.selectedUserId}
                            onChange={this.handleSelectUserChange}
                            className="form-control"
                        >
                            <option selected value={'0'}>Selected a User ...</option>
                            {this.renderUsers()}
                        </select>
                        <label>Content:</label>
                        <input
                            type="text"
                            className="form-control p-1 my-2"
                            value={this.state.chirp}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ chirp: e.target.value })} />
                        <button className="btn btn-primary btn-lg shadow mt-2">Post!</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PostChirp;