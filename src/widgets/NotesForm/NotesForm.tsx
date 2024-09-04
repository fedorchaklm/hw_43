import { useAppDispatch } from "../../app/store/store";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextInput, ErrorMessage } from "../../common/ui";
import { Note, addNote } from "../../data/notes";

type Params = {
  resetForm: () => void;
};

export default function NotesFormHook() {
  const NotesValidateScheme = yup.object().shape({
    userNoteTitle: yup
      .string()
      .min(2, "At least 2 chars required")
      .max(10, "Title should be less 10 chars")
      .required("This field is required"),
    userNoteDescription: yup
      .string()
      .min(5, "At least 5 chars required")
      .max(50, "Title should be less 50 chars")
      .required("This field is required"),
  });

  const formik = useFormik({
    initialValues: { userNoteTitle: "", userNoteDescription: "" },
    onSubmit: (values: Note, { resetForm }: Params) => {
      dispatch(addNote(values));
      resetForm();
    },
    validationSchema: NotesValidateScheme,
  });
  const dispatch = useAppDispatch();

  return (
    <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
      <TextInput
        name="userNoteTitle"
        placeholder="Enter note title"
        value={formik.values.userNoteTitle}
        onChange={formik.handleChange}
      />
      {formik.touched.userNoteTitle && formik.errors.userNoteTitle && (
        <ErrorMessage text={formik.errors.userNoteTitle}></ErrorMessage>
      )}
      <TextInput
        name="userNoteDescription"
        placeholder="Enter note description"
        value={formik.values.userNoteDescription}
        onChange={formik.handleChange}
      />
      {formik.touched.userNoteDescription &&
        formik.errors.userNoteDescription && (
          <ErrorMessage text={formik.errors.userNoteDescription}></ErrorMessage>
        )}
      <Button type="submit" text="Add" />
    </form>
  );
}
