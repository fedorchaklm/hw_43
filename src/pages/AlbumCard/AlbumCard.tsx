import { useParams } from "react-router-dom";
import styles from './AlbumCard.module.css';
import { useGetPhotosQuery } from "../../data/albums/store/albumsApi";

export default function AlbumCard() {
  const { id } = useParams();
  const {data: photos} = useGetPhotosQuery(Number(id));
      
  return (
    <div className={styles.cardWrap}>
      <h1>Photos</h1>
      <ul className={styles.cardList}>
        {photos?.map((photo) => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}