import {useState} from 'react';

export default function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // pretend to submit or call API here
    setSubmitted(true);
  };

  if (submitted) return <p>Form submitted successfully!</p>;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          data-testid="input-name"
        />
      </label>

      <label>
        Email
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          data-testid="input-email"
        />
      </label>

      <button type="submit" data-testid="submit-btn">Submit</button>
    </form>
  );
}