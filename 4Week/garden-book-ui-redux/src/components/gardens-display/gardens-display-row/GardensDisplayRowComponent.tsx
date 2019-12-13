import React from 'react'
import { Garden } from '../../../models/garden';

interface IGardensDisplayRowProps{
    garden: Garden
}

export const GardensDisplayRowComponent: React.FC<IGardensDisplayRowProps> = (props) => {
    return (
        <tr>
            <td>{props.garden.name}</td>
            <td>{props.garden.username}</td>
            <td>{props.garden.prettiness}</td>
            <td>{props.garden.roles}</td>
        </tr>
    )
}