import "./Subscribe.scss";

const Subscribe = () => {
  const onSubmit = e => {
    // Handle Submit
    e.preventDefault();
  };

  return (
    <form className="subscribe" {...{ onSubmit }}>
      <input placeholder="Your E-Mail" type="email" />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default Subscribe;
