import {dbConnect} from 'utils/mongoose';
import Task from 'models/Task';

dbConnect()

export default async function handler(req, res) {
    const tasks = await Task.find();
    console.log(tasks);
    console.log("llegado")
    res.status(200).json(tasks)
}  