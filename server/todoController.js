module.exports = {
    getAll: async (req,res) => {
        const db = req.app.get('db')
        //when using async await you have to assign db.get_all_items() to a variable
        let allTodos = await db.get_all_todos()
        
        res.status(200).send(allTodos)
        //other way to write upper two lines
        //db.get_all_items()
        //.then(allItems => { 
          //res.status(200).send(allItems)  
        //})
        // .catch(err => {
        //     res.statu(500).send('you done messed up bra')
        // })
    },
    getNewTodo: (req,res) => {
        const db = req.app.get('db')
        
    }
}