import { useState } from "react"
import Book from "./Book"
import NewBookForm from "./NewBookForm"

const Shelf = (props) => {

    const [books, setbooks] = useState(props.books)

    const addBook = book => setbooks([...books, book])

    return (
        <section>
            <h1>{props.genre}</h1>
            <NewBookForm addBook={addBook} />
            <section>
                {
                    books.map(book => <Book title={book.title} author={book.author} />)
                }
            </section>
            <hr />
        </section>
    )
}

export default Shelf