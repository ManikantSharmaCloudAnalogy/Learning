import './FormStatus.css'
import { useActionState, useState } from "react";
export function FormStatus() {
  const SubmitForm = async (prevState, formData) => {
    const name = formData.get("name");
    if (!name) {
      return { error: "Name is Required" };
    }
    await new Promise((p) => setTimeout(p, 3000));
  return {success:`${name}` };
  };
  const [state, formAction, pending] = useActionState(SubmitForm, {
  error: null,
  success: null
});
  return (
    <div>
      <form action={formAction}>
        <input type="text" name="name" placeholder="enter your name" />
        <button type="submit" disabled={pending} className="btn"> {pending ?"Submitting..." : "Submit"}
        </button>
      </form>
        {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      {state.success && <p>{state.success}</p>}
    </div>
  );
}
