import * as React from 'react';
import ChirpCard from './ChirpCard';
import Jumbotron from './Jumbotron';

export interface IRequestAllChirpsProps {

}

export interface IRequestAllChirpsState {
    chirps: { id: number, userid: number, chirp: string, location: string, _created: Date, name: string }[];
}

class IRequestAllChirps extends React.Component<IRequestAllChirpsProps, IRequestAllChirpsState> {
    constructor(props: IRequestAllChirpsProps) {
        super(props);
        this.state = { chirps: [] };
    }

    async componentDidMount() {
        try {
            let r = await fetch('/api/chirps')
            let chirps = await r.json();
            this.setState({ chirps });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <>
                <div className="row">
                    <Jumbotron />
                </div>
                <div className="row">
                    {this.state.chirps.map(chirp => {
                        return <ChirpCard key={chirp.id} chirp={ chirp }/>
                    })}
                </div>
            </>
        );
    }
}

export default IRequestAllChirps;