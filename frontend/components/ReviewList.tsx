import React from 'react';
import styles from '../styles/style.module.css'

interface Review {
  id: number;
  title: string;
  body: string;
  rating: number;
}

interface ReviewListProps {
  reviews: Review[];
  onDeleteReview: (id: number) => void;
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews, onDeleteReview }) => {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id} className={styles.reseñas}>
          <strong>Puntuación: {review.puntuacion}</strong>
          <p>Título: {review.titulo}</p>
          <span>Descripción: {review.descripcion}</span>
          <button onClick={() => onDeleteReview(review.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default ReviewList;
