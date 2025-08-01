import React from 'react';

const book = {
    id: 1,
    title: 'Deep Dive into React',
    author: 'Jane Doe',
    price: 399,
};

export default function BookDetails() {
    return (
        <div>
            <h2>Book Details</h2>
            <ul>
                <li><strong>ID:</strong> {book.id}</li>
                <li><strong>Title:</strong> {book.title}</li>
                <li><strong>Author:</strong> {book.author}</li>
                <li><strong>Price:</strong> ₹{book.price}</li>
            </ul>
        </div>
    );
}