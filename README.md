# Data Modelling using Mongoose

Examples:

> [TodoApp](TodoApp)

> Ecommerce

> Hospital Data modeling




## TodoApp
```mermaid
erDiagram
    Users {
        STRING ID PK
        STRING UserName
        STRING Email
        STRING Password
    }

    Todo {
        STRING ID PK
        STRING createdBy FK
        STRING content
        BOOLEAN complete
        SubTodo[] subTodos
    }

    SubTodo {
        STRING ID PK
        STRING createdBy FK
        STRING content
        BOOLEAN complete
    }

    Users ||--o{ Todo: "creates"
    Users ||--o{ SubTodo: "creates"
    Todo ||--o{ SubTodo: "contains"
