let Database = {
    cindy: {
        reminders: [{id: 1, title: "abc", description: "abcabc", completed: false, subtasks: [
            {
                title: "subtask 1",
                description: "sub desc"
            }

        ], tags: ["food", "shopping"]}]
    },
    alex: {
        reminders: []
    } 
}

module.exports = Database;