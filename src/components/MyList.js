const MyList = ({ header, items, onItemClick }) => {
    return (
    <div>
        <h2>{header}</h2>
        <ul>
            {items.map((item) => (
            <li 
            key = {item.id}
            style = {{textDecoration: item.clicked ? 'line-through' : ''}} 
            onClick = {() => onItemClick(item.id)}>{item.text} 
            </li>
            ))}
        </ul>
    </div>
    );
}

export default MyList;