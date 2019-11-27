import { TrainDTO } from "../dto/TrainDTO";
import { Train } from "../Train";
//moving from one data storage object to another
//perfect for map functions
export function trainDTOToTrain(t:TrainDTO):Train{
    let train = new Train
    train.trainId = t.train_id
    train.trainName = t.train_name
    train.topSpeed = t.top_speed
    train.avgSpeed = t.avg_speed
    train.capacity = t.capacity
    train.gpsLocation = [t.gps_location.x, t.gps_location.y]
    return train
}