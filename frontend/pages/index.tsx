import React, { useEffect, useState } from 'react';
import ReviewList from '../components/ReviewList';
import ReviewForm from '../components/ReviewForm';
import styles from '../styles/style.module.css'
import axios from 'axios';

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
      const response = await axios.get('http://localhost:3000/review');
      const data = response.data;
      setReviews(data);
    } catch (error) {
      console.error('Error al obtener las reseñas:', error);
    }
  };
  
  useEffect(() => {
    fetchReviews();
  }, []);
  
  const handleCreateReview = async (review: Review) => {
    try {
      const response = await axios.post('http://localhost:3000/review', review, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        await fetchReviews(); // Esperar a que se resuelva la solicitud GET antes de continuar
      }
    } catch (error) {
      console.error('Error al crear la reseña:', error);
    }
  };
  
  const handleDeleteReview = async (id: number) => {
    try {
      const response = await axios.delete(`http://localhost:3000/review/${id}`);
      if (response.status === 200) {
        fetchReviews();
      }
    } catch (error) {
      console.error('Error al eliminar la reseña:', error);
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
