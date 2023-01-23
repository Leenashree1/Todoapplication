import TodoRowItems from "./TodoRowItems"
function TodoTable(props) {  //props.Key.

    return (

        <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='col'>S. No</th>
                    <th scope='col'> Description</th>
                    <th scope='col'> Status</th>
                </tr>
            </thead>

            <tbody>
                {
                    props.Key.map(todo => ( 
                        <TodoRowItems
                            rowNumber={todo.rowNumber}
                            rowDescription={todo.rowDescription}
                            rowStatus={todo.status}
                        />
                  ))


                }
{/* 
                 <TodoRowItems    // what is passed in props (rowNumber : 1, rowDescription : Read book, rowStatus : done)
                    rowNumber={props.Key[0].rowNumber}
                    rowDescription={props.Key[0].rowDescription}
                    rowStatus={props.Key[0].status}
                />
                <TodoRowItems    // what is passed in props (rowNumber : 1, rowDescription : Read book, rowStatus : done)
                    rowNumber={props.Key[1].rowNumber}
                    rowDescription={props.Key[1].rowDescription}
                    rowStatus={props.Key[1].status}
                />
                <TodoRowItems    // what is passed in props (rowNumber : 1, rowDescription : Read book, rowStatus : done)
                    rowNumber={props.Key[2].rowNumber}
                    rowDescription={props.Key[2].rowDescription}
                    rowStatus={props.Key[2].status}
                />
                <TodoRowItems    // what is passed in props (rowNumber : 1, rowDescription : Read book, rowStatus : done)
                    rowNumber={props.Key[3].rowNumber}
                    rowDescription={props.Key[3].rowDescription}
                    rowStatus={props.Key[3].status}
                />
                <TodoRowItems    // what is passed in props (rowNumber : 1, rowDescription : Read book, rowStatus : done)
                    rowNumber={props.Key[4].rowNumber}
                    rowDescription={props.Key[4].rowDescription}
                    rowStatus={props.Key[4].status}
                />  */}

            </tbody>
        </table>
    )
}

export default TodoTable