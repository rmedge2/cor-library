const Book = (props) => {
    return (
        <article>
            <h3>{props.title}</h3>
            <p>{props.author}</p>
        </article>
    )
}

export default Book