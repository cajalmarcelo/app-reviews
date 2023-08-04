import React, { useEffect, useState } from 'react';
import ReviewList from '../components/ReviewList';
import ReviewForm from '../components/ReviewForm';
import styles from '../styles/style.module.css'

interface Review {
  id: number;
  titulo: string;
  descripcion: string;
  puntuacion: number;
}

const Home = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const fetchReviews = async () => {
    try {
      const response = await fetch('http://localhost:3000/review');
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleCreateReview = async (review: Review) => {
    try {
      const response = await fetch('http://localhost:3000/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });
      if (response.ok) {
        fetchReviews();
      }
    } catch (error) {
      console.error('Error creating review:', error);
    }
  };

  const handleDeleteReview = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/review/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchReviews();
      }
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  return (
    
    <div className={styles.container}>
      <h1 className={styles.titulo}>Reseñas</h1>
      <ReviewList reviews={reviews} onDeleteReview={handleDeleteReview} />
      <ReviewForm onSubmit={handleCreateReview} />
    </div>
  );
};

export default Home;
