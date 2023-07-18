import axios from "axios";
import express from "express";
const router=express.Router();
import fs from "fs";
import path from "path";

router.use('/todos', (req, res) => {
    fs.readFile(path.join(__dirname, "todos/todo.html"), 'utf-8', async (err, data) => {
        if (err) {
            return res.send("Load ui err")
        }
        let tableContent = ``;
        let todos;
        await axios.get("http://localhost:3000/api/v1/todos")
            .then(res => {
                todos = res.data.data
            })
            .catch(err => {
                todos = [];
            })
        todos.map((todo, index) => {
            tableContent += `
            <tr>
            <td scope="col">
            <div class="d-flex align-items-center">
              <input style="transform: scale(2.0);" type="checkbox" ${todo.completed ? 'checked' : ''} onChange={changeTodo(event,${todo.id})} />
            </div>
            </td>
                <td class="toDoTitle" scope="col" ${todo.completed ? 'style="text-decoration: line-through"' : ''}>${todo.title}</td>
                <td sscope="col">
                <button onclick={deleteTodo(${todo.id})} type="button"  class="btn btn-primary"style="background-color:white;color:red;border: none;" >Delete</button>
                </td>  
            </tr>
          `
        })
        res.send(data.replace("{{tableContent}}", tableContent));
    })

})
router.use('/todos', (req, res) => {
    fs.readFile(path.join(__dirname, "todos/todo.html"), 'utf-8', async (err, data) => {
        if (err) {
            return res.send("Load ui err")
        }
        res.send(data)
    })
})

module.exports = router;
