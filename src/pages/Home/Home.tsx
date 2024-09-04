import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/store";
import styles from "./Home.module.css";
import NotesForm from "../../widgets/NotesForm/NotesForm";
import NoteList from "../../widgets/NoteList/NoteList";
import NoteItem from "../../widgets/NoteItem/NoteItem";
import { clearNotes } from "../../data/notes/store/notesSlice";
import { Button } from "../../common/ui";

export default function Home() {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [error, setError] = useState<string>("");
  const notes = useAppSelector((state) => state.notes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((user) => setUser(user))
      .catch(() => setError("Something went wrong"));
  }, []);

  if (error) {
    return <p className={styles.error_info}>Error: {error} </p>;
  }

  if (!user) {
    return <p className={styles.loading_info}>Loading...</p>;
  }

  return (
    <div className={styles.app}>
      <p className={styles.user_info}>
        UserName: <b>{user.name}</b>
      </p>
      <h1>Your notesList</h1>
      <NotesForm />
      {notes.length === 0 ? (
        <p className={styles.notes_wrap}>There are no notes</p>
      ) : (
        <>
          <NoteList title="Notes">
            {notes.map((note, index) => (
              <NoteItem note={note} key={index} />
            ))}
          </NoteList>

          <Button
            type="button"
            text="Delete notes"
            onClick={() => dispatch(clearNotes())}
          />
        </>
      )}
    </div>
  );
}
