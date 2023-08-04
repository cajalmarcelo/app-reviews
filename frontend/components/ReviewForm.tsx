import React, { useState } from 'react';
import styles from '../styles/style.module.css'

interface Review {
  titulo: string;
  descripcion: string;
  puntuacion: number;
}

interface ReviewFormProps {
  onSubmit: (review: Review) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const [newReview, setNewReview] = useState<Review>({
    titulo: '',
    descripcion: '',
    puntuacion: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'puntuacion') {
      // Que la puntuacion no supere 5
      let newValue = parseInt(value);
      newValue = Math.max(0, Math.min(newValue, 5));
      setNewReview({ ...newReview, [name]: newValue });
    } else {
      setNewReview({ ...newReview, [name]: value });
    }
  };

  const handleSubmit = () => {
    onSubmit(newReview);
    setNewReview({ titulo: '', descripcion: '', puntuacion: 0 });
  };

  return (
    <>
    <div className={styles.reseñas_form}>
    <div className={styles.reseñas_contenido}>
        <label htmlFor="">Titulo:</label>
      <input
        type="text"
        name="titulo"
        value={newReview.titulo}
        onChange={handleInputChange}
        placeholder="Título"
      />
      </div>
      <div className={styles.reseñas_contenido}>
        <label htmlFor="">Descripción:</label>
      <input
        name="descripcion"
        value={newReview.descripcion}
        onChange={handleInputChange}
        placeholder="Descripción"
      />
      </div>
      <div className={styles.reseñas_contenido}>
        <label htmlFor="">Puntuación:</label>
      <input
        type="number"
        name="puntuacion"
        value={newReview.puntuacion}
        onChange={handleInputChange}
        placeholder="Puntuacion"
      />
      </div>
      <button onClick={handleSubmit} className={styles.reseña_boton}>Agregar Reseña</button>
      </div>
    </>
  );
};

export default ReviewForm;
