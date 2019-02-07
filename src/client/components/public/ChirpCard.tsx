import * as React from 'react';
import { Link } from 'react-router-dom';

export interface ChirpCardProps {
    chirp: { id: number, name: string, chirp: string }
}

const ChirpCard: React.SFC<ChirpCardProps> = (props) => {
    return (
        <div className="col-md-12">
            <div className="card m-2">
                <div className="card-body">
                    <div className="card-title border border-dark border-top-0 border-left-0 border-right-0">{props.chirp.name} Chirped!</div>
                    <div className="card-text">{props.chirp.chirp}</div>
                    <div className="card-footer mt-2">{props.chirp.id}</div>
                    <Link to={`/admin/${props.chirp.id}`} className="btn btn-primary mt-2">Edit Chirp</Link>
                </div>
            </div>
        </div>
    );
}

export default ChirpCard;