//this should be what we get from the DB
export class TrainDTO{
    train_id: number
        train_name: string
        top_speed: number
        avg_speed: number
        capacity: number
        unscheduled_downtime: number
        maintenance_downtime: number
        gps_location: {
            x: number
            y: number
        }
        gps_location_id: number
}