"use client";
import { Database } from "@/lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

const ProductForm = () => {
  const supabase = createClientComponentClient<Database>();

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>();

  const handleSubmit = async () => {
    await supabase.from("products").insert({ name, description });
  };

  return (
    <form className="grid gap-4">
      <input
        type="text"
        onChange={(e) => setName(e.currentTarget.value)}
        value={name}
        placeholder="Name"
        className="input input-bordered w-full max-w-xs"
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

export default ProductForm;
