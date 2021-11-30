import {dbConnect} from 'utils/mongoose';
import Task from 'models/Task';

dbConnect()

export default async (req, res) => {

    const {method, body, query: {id}} = req
    switch (method) {
       case "GET":
            try {
                const task = await Task.findById(id)        
                if(!task) return res.status(404).json({msg: "Task not found"});
                return res.status(200).json(task)
            } catch (error) {
                return res.status(500).json({msg: error.message});
            }
        case "PUT":

        case "DELETE":

        default:
            return res.status(400).json({masg: "This method is not supported"});
    }
}