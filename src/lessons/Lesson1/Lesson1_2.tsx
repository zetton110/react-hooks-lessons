import { useState } from "react";
//https://ja.react.dev/learn/updating-arrays-in-state#making-other-changes-to-an-array

//object
const Lesson1_2 = () => {
  const [form, setForm] = useState({
    firstName: "Code",
    lastName: "Shin",
    email: "shincode@gmail.com",
  });

  // form.firstName = "ModShin"; //✖mutation

  return (
    <div>
      <div className="flex mb-5">
        <label>
          First Name:
          <input
            value={form.firstName}
            type="text"
            onChange={(e) => {
              //replace
              setForm({
                ...form,
                firstName: e.target.value,
              });
            }}
            className="border border-slate-500"
          />
        </label>
        <label>
          Last Name:
          <input
            value={form.lastName}
            type="text"
            onChange={(e) => {
              setForm({
                ...form,
                lastName: e.target.value,
              });
            }}
            className="border border-slate-500"
          />
        </label>
        <label>
          Email:
          <input
            value={form.email}
            type="text"
            onChange={(e) => {
              setForm({
                ...form,
                email: e.target.value,
              });
            }}
            className="border border-slate-500"
          />
        </label>
      </div>
      <p>
        {form.firstName}
        <br />
        {form.lastName}
        <br />
        {form.email}
      </p>
    </div>
  );
};

export default Lesson1_2;
