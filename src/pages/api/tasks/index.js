import {dbConnect} from 'utils/mongoose';
import Task from 'models/Task';

dbConnect()

export default async function handler(req, res) {

    const {method, body} = req

    switch (method) {
        case "GET": 
            const tasks = await Task.find();
            return res.status(200).json(tasks)
        case "POST":
            console.log(body);
            return res.json("creating a task")
        default:
            return res.status(400).json({msg: "This method is not supported"});
    }
}  