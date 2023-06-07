import { Database } from "@/lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

interface Props {
  onSubmit: VoidFunction;
}

export const ProductForm = ({ onSubmit }: Props) => {
  const supabase = createClientComponentClient<Database>();

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>();

  const handleSubmit = async () => {
    await supabase.from("products").insert({ name, description });
    onSubmit();
  };

  return (
    <form className="grid gap-4">
      <input
        type="text"
        onChange={(e) => setName(e.currentTarget.value)}
        value={name}
        placeholder="Name"
        className="input input-bordered w-full"
      />
      <textarea
        className="textarea textarea-bordered"
        placeholder="Description"
        onChange={(e) => setDescription(e.currentTarget.value)}
      >
        {description}
      </textarea>
      <button type="button" className="btn" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};
